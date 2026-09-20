/**
 * NAIRI VENTURES · REAL-TIME SITE SYNC ENGINE (v6.0)
 * Automatically synchronizes public page content, media images, logo, and typography
 * with the Admin CMS in real time using BroadcastChannel, localStorage events,
 * local server API, static fallback, and Supabase Cloud database.
 */

(function () {
  const CMS_STORAGE_KEY = 'nairi_db_page_content';
  const IMAGES_STORAGE_KEY = 'nairi_db_images';
  const BRANDING_STORAGE_KEY = 'nairi_db_branding';
  const VENTURES_STORAGE_KEY = 'nairi_db_ventures';
  const TESTIMONIALS_STORAGE_KEY = 'nairi_db_testimonials';

  // Helper to decode HTML entities like &amp; when inserting plain text
  function decodeEntities(str) {
    if (!str || typeof str !== 'string') return '';
    const txt = document.createElement('textarea');
    txt.innerHTML = str;
    return txt.value;
  }

  // 1. Text & HTML Content Sync
  function applyContentSync() {
    try {
      const raw = localStorage.getItem(CMS_STORAGE_KEY);
      if (!raw) return;
      const contentList = JSON.parse(raw);
      if (!Array.isArray(contentList)) return;

      contentList.forEach(item => {
        if (!item || !item.section_key) return;
        const selector = `[data-cms-key="${item.section_key}"]`;
        const elements = document.querySelectorAll(selector);

        elements.forEach(el => {
          if (item.is_deleted) {
            el.style.display = 'none';
          } else if (item.content !== undefined) {
            el.style.display = '';
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
              el.value = item.content;
            } else if (item.content.includes('<') && item.content.includes('>')) {
              el.innerHTML = item.content;
            } else {
              el.textContent = decodeEntities(item.content);
            }
          }
        });
      });

      // Notify Top Video player of any content changes
      window.dispatchEvent(new CustomEvent('top_video_updated'));
    } catch (err) {
      console.warn('Content sync error:', err);
    }
  }

  // 2. Images & Media Sync
  function applyImageSync() {
    try {
      const raw = localStorage.getItem(IMAGES_STORAGE_KEY);
      if (!raw) return;
      const imagesList = JSON.parse(raw);
      if (!Array.isArray(imagesList)) return;

      imagesList.forEach(img => {
        if (!img || !img.element_key || !img.url) return;
        const selector = `[data-cms-img="${img.element_key}"]`;
        const elements = document.querySelectorAll(selector);

        elements.forEach(el => {
          if (el.tagName === 'IMG') {
            if (el.getAttribute('src') !== img.url) {
              el.src = img.url;
            }
            if (img.alt) el.alt = img.alt;
          } else {
            // Background image container
            el.style.backgroundImage = `url('${img.url}')`;
          }
        });
      });
    } catch (err) {
      console.warn('Image sync error:', err);
    }
  }

  // Google Font & Fontshare Loader Helper
  const loadedFonts = new Set();
  function loadGoogleFont(fontName) {
    if (!fontName || loadedFonts.has(fontName)) return;
    const standardWebFonts = ['Georgia', 'Times New Roman', 'Arial', 'Helvetica', 'sans-serif', 'serif', 'monospace'];
    if (standardWebFonts.includes(fontName)) return;

    try {
      const lower = fontName.toLowerCase().trim();
      const fontshareMap = {
        'general sans': 'https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600,700&display=swap',
        'satoshi': 'https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap',
        'cabinet grotesk': 'https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@400,500,700,800&display=swap',
        'clash display': 'https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&display=swap'
      };

      if (fontshareMap[lower]) {
        const linkId = `fontshare-${lower.replace(/\s+/g, '-')}`;
        if (!document.getElementById(linkId)) {
          const link = document.createElement('link');
          link.id = linkId;
          link.rel = 'stylesheet';
          link.href = fontshareMap[lower];
          document.head.appendChild(link);
        }
        loadedFonts.add(fontName);
        return;
      }

      const fontSlug = encodeURIComponent(fontName).replace(/%20/g, '+');
      const fontUrl = `https://fonts.googleapis.com/css2?family=${fontSlug}:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,600&display=swap`;
      
      const linkId = `google-font-${fontSlug}`;
      if (!document.getElementById(linkId)) {
        const link = document.createElement('link');
        link.id = linkId;
        link.rel = 'stylesheet';
        link.href = fontUrl;
        document.head.appendChild(link);
      }
      loadedFonts.add(fontName);
    } catch (e) {
      console.warn('Could not load font:', fontName, e);
    }
  }

  // 3. Logo & Granular Typography (Branding) Sync
  function applyBrandingSync() {
    try {
      const raw = localStorage.getItem(BRANDING_STORAGE_KEY);
      if (!raw) return;
      const branding = JSON.parse(raw);
      if (!branding || typeof branding !== 'object') return;

      const brandText = branding.logo_text !== undefined && branding.logo_text !== null ? branding.logo_text : '';

      // A. Standard data-cms-logo containers
      const logoContainers = document.querySelectorAll('[data-cms-logo]');
      logoContainers.forEach(container => {
        const isFooter = container.classList.contains('footer-logo') || container.closest('.site-footer');
        let innerHtml = '';

        if (branding.logo_image) {
          const logoSrc = (isFooter && (branding.logo_image.includes('navy') || branding.logo_image.includes('icon.svg')))
            ? (branding.logo_image.replace('navy', 'white'))
            : branding.logo_image;
          innerHtml += `<img src="${logoSrc}" alt="${brandText}" class="custom-logo-icon" style="max-height: 38px; width: auto; vertical-align: middle; flex-shrink: 0;">`;
        }

        innerHtml += `<span class="logo-text" style="${isFooter ? 'color: var(--color-ivory);' : ''}">${brandText}</span>`;
        container.innerHTML = innerHtml;
      });

      // B. Update landing page header logo button
      const navLogoBtn = document.querySelector('[data-testid="nav-logo"]');
      if (navLogoBtn) {
        const img = navLogoBtn.querySelector('img');
        if (img && branding.logo_image) {
          img.src = branding.logo_image;
        }
        const span = navLogoBtn.querySelector('[data-cms-key="brand.name"]') || navLogoBtn.querySelector('span');
        if (span) span.remove();
      }

      // C. Update landing page footer brand logo block
      const footerLogoBlock = document.querySelector('[data-testid="footer-logo-block"]');
      if (footerLogoBlock) {
        const img = footerLogoBlock.querySelector('img');
        if (img && branding.logo_image) {
          const footerSrc = (branding.logo_image.includes('navy') || branding.logo_image.includes('icon.svg'))
            ? branding.logo_image.replace('navy', 'white')
            : branding.logo_image;
          img.src = footerSrc;
        }
        const span = footerLogoBlock.querySelector('[data-cms-key="brand.footer_name"]') || footerLogoBlock.querySelector('span');
        if (span) {
          if (branding.logo_text) {
            span.innerHTML = `<span class="text-sky-400">${branding.logo_text}</span>`;
          } else {
            span.innerHTML = '';
          }
        }
      }

      // D. Granular Typography Controls
      const headingFont = branding.font_heading || branding.font_serif;
      if (headingFont) {
        loadGoogleFont(headingFont);
        document.documentElement.style.setProperty('--font-heading', `'${headingFont}', Georgia, serif`);
        document.documentElement.style.setProperty('--font-serif', `'${headingFont}', Georgia, serif`);
      }

      const subheadingFont = branding.font_subheading || branding.font_sans || 'General Sans';
      if (subheadingFont) {
        loadGoogleFont(subheadingFont);
        document.documentElement.style.setProperty('--font-subheading', `'${subheadingFont}', -apple-system, BlinkMacSystemFont, sans-serif`);
      }

      const bodyFont = branding.font_body || branding.font_sans || 'General Sans';
      if (bodyFont) {
        loadGoogleFont(bodyFont);
        document.documentElement.style.setProperty('--font-body', `'${bodyFont}', -apple-system, BlinkMacSystemFont, sans-serif`);
        document.documentElement.style.setProperty('--font-sans', `'${bodyFont}', -apple-system, BlinkMacSystemFont, sans-serif`);
      }

      const monoFont = branding.font_mono || 'JetBrains Mono';
      if (monoFont) {
        loadGoogleFont(monoFont);
        document.documentElement.style.setProperty('--font-mono', `'${monoFont}', ui-monospace, monospace`);
      }

      // E. Accent Color
      if (branding.accent_color) {
        document.documentElement.style.setProperty('--color-amber', branding.accent_color);
        document.documentElement.style.setProperty('--color-accent', branding.accent_color);
      }
    } catch (err) {
      console.warn('Branding sync error:', err);
    }
  }

  // 4. Hero 3-Video 9:16 Seamless Triptych Sync
  function applyHeroReelsSync() {
    try {
      const raw = localStorage.getItem(CMS_STORAGE_KEY);
      if (!raw) return;
      const list = JSON.parse(raw);
      if (!Array.isArray(list)) return;

      const reels = [
        { key: 'home.hero_reel_1.url', elId: 'hero-reel-vid-1' },
        { key: 'home.hero_reel_2.url', elId: 'hero-reel-vid-2' },
        { key: 'home.hero_reel_3.url', elId: 'hero-reel-vid-3' }
      ];

      reels.forEach(r => {
        const item = list.find(p => p && p.section_key === r.key);
        if (item && item.content && item.content.trim()) {
          const newUrl = item.content.trim();
          const videoEl = document.getElementById(r.elId) || document.querySelector(`[data-cms-video="${r.key}"]`);
          if (videoEl) {
            const sourceEl = videoEl.querySelector('source');
            const currentSrc = sourceEl ? sourceEl.getAttribute('src') : videoEl.getAttribute('src');
            if (currentSrc !== newUrl) {
              if (sourceEl) {
                sourceEl.setAttribute('src', newUrl);
              } else {
                videoEl.innerHTML = `<source src="${newUrl}" type="video/mp4">`;
              }
              videoEl.load();
              videoEl.play().catch(() => {});
            }
          }
        }
      });
    } catch (err) {
      console.warn('Hero reels sync error:', err);
    }
  }

  // Full Synchronizer across DOM
  function applyAllSync() {
    applyContentSync();
    applyImageSync();
    applyBrandingSync();
    applyHeroReelsSync();
  }

  // Cloud Supabase Sync on Live Public Page (if credentials active)
  async function syncFromSupabaseIfAvailable() {
    try {
      if (typeof window !== 'undefined' && window.supabaseClient && window.isSupabaseConfigured && window.isSupabaseConfigured()) {
        const [pageRes, imgRes, brandRes] = await Promise.all([
          window.supabaseClient.from('page_content').select('*'),
          window.supabaseClient.from('images').select('*'),
          window.supabaseClient.from('branding').select('*')
        ]);

        if (pageRes.data && pageRes.data.length) {
          localStorage.setItem(CMS_STORAGE_KEY, JSON.stringify(pageRes.data));
        }
        if (imgRes.data && imgRes.data.length) {
          localStorage.setItem(IMAGES_STORAGE_KEY, JSON.stringify(imgRes.data));
        }
        if (brandRes.data && brandRes.data.length) {
          localStorage.setItem(BRANDING_STORAGE_KEY, JSON.stringify(brandRes.data[0]));
        }
        applyAllSync();
      }
    } catch (e) {
      // Quiet fallback
    }
  }

  // Supabase Realtime Subscription
  function setupSupabaseRealtime() {
    try {
      if (typeof window !== 'undefined' && window.supabaseClient && window.isSupabaseConfigured && window.isSupabaseConfigured()) {
        window.supabaseClient
          .channel('nairi_public_sync')
          .on('postgres_changes', { event: '*', schema: 'public', table: 'page_content' }, () => {
            syncFromSupabaseIfAvailable();
          })
          .on('postgres_changes', { event: '*', schema: 'public', table: 'images' }, () => {
            syncFromSupabaseIfAvailable();
          })
          .on('postgres_changes', { event: '*', schema: 'public', table: 'branding' }, () => {
            syncFromSupabaseIfAvailable();
          })
          .subscribe();
      }
    } catch (e) {}
  }

  // Fetch from Local Server API or Static Fallback
  async function loadFreshCMSData() {
    let loaded = false;

    // 1. Try local server API (/api/cms-data) - Works when running Node.js server
    try {
      const res = await fetch('/api/cms-data', { cache: 'no-store' });
      if (res.ok) {
        const data = await res.json();
        if (data && (data.page_content || data.images || data.branding)) {
          if (data.page_content && data.page_content.length) {
            localStorage.setItem(CMS_STORAGE_KEY, JSON.stringify(data.page_content));
          }
          if (data.images && data.images.length) {
            localStorage.setItem(IMAGES_STORAGE_KEY, JSON.stringify(data.images));
          }
          if (data.branding && Object.keys(data.branding).length) {
            localStorage.setItem(BRANDING_STORAGE_KEY, JSON.stringify(data.branding));
          }
          applyAllSync();
          loaded = true;
        }
      }
    } catch (e) {}

    // 2. Fallback to static data/cms-data.json - Works on GitHub Pages & Netlify
    if (!loaded) {
      try {
        const staticRes = await fetch('data/cms-data.json', { cache: 'no-store' });
        if (staticRes.ok) {
          const staticData = await staticRes.json();
          if (staticData && (staticData.page_content || staticData.images || staticData.branding)) {
            if (!localStorage.getItem(CMS_STORAGE_KEY) && staticData.page_content) {
              localStorage.setItem(CMS_STORAGE_KEY, JSON.stringify(staticData.page_content));
            }
            if (!localStorage.getItem(IMAGES_STORAGE_KEY) && staticData.images) {
              localStorage.setItem(IMAGES_STORAGE_KEY, JSON.stringify(staticData.images));
            }
            if (!localStorage.getItem(BRANDING_STORAGE_KEY) && staticData.branding) {
              localStorage.setItem(BRANDING_STORAGE_KEY, JSON.stringify(staticData.branding));
            }
            applyAllSync();
          }
        }
      } catch (e) {}
    }

    // 3. Supabase Cloud Sync
    await syncFromSupabaseIfAvailable();
    setupSupabaseRealtime();
  }

  // Initial Sync on DOM Ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      applyAllSync();
      loadFreshCMSData();
    });
  } else {
    applyAllSync();
    loadFreshCMSData();
  }

  // Real-time listener: BroadcastChannel (Instant inter-tab communication)
  if (typeof BroadcastChannel !== 'undefined') {
    const channel = new BroadcastChannel('nairi_cms_sync');
    channel.onmessage = (event) => {
      if (event.data && (event.data.type === 'REFRESH_CONTENT' || event.data.key)) {
        applyAllSync();
        if (typeof window.renderDynamicVentures === 'function') window.renderDynamicVentures();
        if (typeof window.renderDynamicHomeVentures === 'function') window.renderDynamicHomeVentures();
        if (typeof window.renderDynamicTestimonials === 'function') window.renderDynamicTestimonials();
        if (typeof window.renderDynamicHomeTestimonials === 'function') window.renderDynamicHomeTestimonials();
        if (typeof window.renderDynamicVideos === 'function') window.renderDynamicVideos();
      }
    };
  }

  // Real-time listener: Storage event across tabs
  window.addEventListener('storage', (e) => {
    if (e.key && (e.key.startsWith('nairi_db_') || e.key === CMS_STORAGE_KEY)) {
      applyAllSync();
      if (typeof window.renderDynamicVentures === 'function') window.renderDynamicVentures();
      if (typeof window.renderDynamicHomeVentures === 'function') window.renderDynamicHomeVentures();
      if (typeof window.renderDynamicTestimonials === 'function') window.renderDynamicTestimonials();
      if (typeof window.renderDynamicHomeTestimonials === 'function') window.renderDynamicHomeTestimonials();
      if (typeof window.renderDynamicVideos === 'function') window.renderDynamicVideos();
    }
  });

  // Re-sync when switching back to this tab
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      applyAllSync();
      syncFromSupabaseIfAvailable();
    }
  });

  // Periodic polling fallback for changes made on external devices
  setInterval(() => {
    syncFromSupabaseIfAvailable();
  }, 15000);

  // Stealth Owner Admin Access (Zero Public Footprint)
  // 1. Secret Hotkey: Ctrl + Shift + A (or Cmd + Shift + A on Mac)
  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
      e.preventDefault();
      const adminPath = window.location.pathname.includes('/admin/') ? 'index.html' : 'admin/index.html';
      window.location.href = adminPath;
    }
  });

  // 2. Secret Mobile/Click Trigger: 5 rapid clicks on the footer logo
  document.addEventListener('DOMContentLoaded', () => {
    const footerLogo = document.querySelector('.footer-logo, [data-cms-logo="site.logo"], [data-testid="footer-logo-block"]');
    if (footerLogo) {
      let clickCount = 0;
      let lastClick = 0;
      footerLogo.addEventListener('click', () => {
        const now = Date.now();
        if (now - lastClick > 1500) {
          clickCount = 1;
        } else {
          clickCount++;
        }
        lastClick = now;
        if (clickCount >= 5) {
          clickCount = 0;
          const adminPath = window.location.pathname.includes('/admin/') ? 'index.html' : 'admin/index.html';
          window.location.href = adminPath;
        }
      });
    }
  });

  window.NairiSiteSync = {
    refresh: applyAllSync,
    refreshContent: applyContentSync,
    refreshImages: applyImageSync,
    refreshBranding: applyBrandingSync,
    loadFreshData: loadFreshCMSData
  };
})();
