/**
 * NAIRI VENTURES — REAL-TIME SITE SYNC ENGINE (v5.0)
 * Automatically synchronizes public page content, media images, logo, and typography
 * with the Admin CMS in real time using BroadcastChannel and localStorage events.
 */

(function () {
  const CMS_STORAGE_KEY = 'nairi_db_page_content';
  const IMAGES_STORAGE_KEY = 'nairi_db_images';
  const BRANDING_STORAGE_KEY = 'nairi_db_branding';
  const VENTURES_STORAGE_KEY = 'nairi_db_ventures';
  const TESTIMONIALS_STORAGE_KEY = 'nairi_db_testimonials';

  // Invalidate stale client caches to guarantee fresh display
  const SYNC_SCHEMA_VERSION = 'v3_obsidian_20260910';
  try {
    const savedVer = localStorage.getItem('nairi_cache_version');
    if (savedVer !== SYNC_SCHEMA_VERSION) {
      localStorage.removeItem(CMS_STORAGE_KEY);
      localStorage.removeItem(IMAGES_STORAGE_KEY);
      localStorage.removeItem(BRANDING_STORAGE_KEY);
      localStorage.removeItem(TESTIMONIALS_STORAGE_KEY);
      localStorage.setItem('nairi_cache_version', SYNC_SCHEMA_VERSION);
    }
  } catch (e) {}

  // 1. Text & HTML Sync
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
            if (item.content.includes('<') && item.content.includes('>')) {
              el.innerHTML = item.content;
            } else {
              el.textContent = item.content;
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
            el.src = img.url;
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

  // Google Font Loader Helper
  const loadedFonts = new Set();
  function loadGoogleFont(fontName) {
    if (!fontName || loadedFonts.has(fontName)) return;
    const standardWebFonts = ['Georgia', 'Times New Roman', 'Arial', 'Helvetica', 'sans-serif', 'serif'];
    if (standardWebFonts.includes(fontName)) return;

    try {
      const fontSlug = encodeURIComponent(fontName).replace(/%20/g, '+');
      const fontUrl = `https://fonts.googleapis.com/css2?family=${fontSlug}:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&display=swap`;
      
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

  // 3. Logo & Typography (Branding) Sync
  function applyBrandingSync() {
    try {
      const raw = localStorage.getItem(BRANDING_STORAGE_KEY);
      if (!raw) return;
      const branding = JSON.parse(raw);
      if (!branding || typeof branding !== 'object') return;

      // A. Logo Text & Image (1st: Logo Icon, 2nd: Written Brand Name)
      const logoContainers = document.querySelectorAll('[data-cms-logo]');
      logoContainers.forEach(container => {
        const isFooter = container.classList.contains('footer-logo') || container.closest('.site-footer');
        const brandText = branding.logo_text !== undefined && branding.logo_text !== null && branding.logo_text !== '' ? branding.logo_text : 'Nairee';
        let innerHtml = '';

        if (branding.logo_image) {
          const logoSrc = (isFooter && (branding.logo_image === 'images/nairi-icon.svg' || branding.logo_image === 'images/nairi-logo.svg'))
            ? 'images/nairi-icon-white.svg'
            : branding.logo_image;
          innerHtml += `<img src="${logoSrc}" alt="${brandText}" class="custom-logo-icon" style="max-height: 38px; width: auto; vertical-align: middle; flex-shrink: 0;">`;
        }

        innerHtml += `<span class="logo-text" style="${isFooter ? 'color: var(--color-ivory);' : ''}">${brandText}</span>`;
        container.innerHTML = innerHtml;
      });

      // B. Typography (Serif & Sans Fonts)
      if (branding.font_serif) {
        loadGoogleFont(branding.font_serif);
        document.documentElement.style.setProperty('--font-serif', `'${branding.font_serif}', Georgia, serif`);
      }

      if (branding.font_sans) {
        loadGoogleFont(branding.font_sans);
        document.documentElement.style.setProperty('--font-sans', `'${branding.font_sans}', -apple-system, BlinkMacSystemFont, sans-serif`);
      }

      // C. Accent Color
      if (branding.accent_color) {
        document.documentElement.style.setProperty('--color-amber', branding.accent_color);
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

  // Full Synchronizer
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
        const { data: pageData } = await window.supabaseClient.from('page_content').select('*');
        if (pageData && pageData.length) {
          localStorage.setItem(CMS_STORAGE_KEY, JSON.stringify(pageData));
        }
        const { data: imgData } = await window.supabaseClient.from('images').select('*');
        if (imgData && imgData.length) {
          localStorage.setItem(IMAGES_STORAGE_KEY, JSON.stringify(imgData));
        }
        const { data: brandData } = await window.supabaseClient.from('branding').select('*');
        if (brandData && brandData.length) {
          localStorage.setItem(BRANDING_STORAGE_KEY, JSON.stringify(brandData[0]));
        }
        applyAllSync();
      }
    } catch (e) {
      // Quiet fallback
    }
  }

  // Server CMS API Sync on Live Public Page
  async function syncFromServerApi() {
    try {
      const res = await fetch('/api/cms-data');
      if (res.ok) {
        const data = await res.json();
        if (data && data.page_content && data.page_content.length) {
          localStorage.setItem(CMS_STORAGE_KEY, JSON.stringify(data.page_content));
        }
        if (data && data.images && data.images.length) {
          localStorage.setItem(IMAGES_STORAGE_KEY, JSON.stringify(data.images));
        }
        if (data && data.branding && Object.keys(data.branding).length) {
          localStorage.setItem(BRANDING_STORAGE_KEY, JSON.stringify(data.branding));
        }
        applyAllSync();
      }
    } catch (e) {
      // Offline fallback
    }
  }

  // Initial Sync on DOM Ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      applyAllSync();
      syncFromServerApi();
      syncFromSupabaseIfAvailable();
    });
  } else {
    applyAllSync();
    syncFromServerApi();
    syncFromSupabaseIfAvailable();
  }

  // Real-time listener: BroadcastChannel
  if (typeof BroadcastChannel !== 'undefined') {
    const channel = new BroadcastChannel('nairi_cms_sync');
    channel.onmessage = (event) => {
      if (event.data && event.data.type === 'REFRESH_CONTENT') {
        applyAllSync();
        if (typeof window.renderDynamicVentures === 'function') {
          window.renderDynamicVentures();
        }
        if (typeof window.renderDynamicHomeVentures === 'function') {
          window.renderDynamicHomeVentures();
        }
        if (typeof window.renderDynamicTestimonials === 'function') {
          window.renderDynamicTestimonials();
        }
        if (typeof window.renderDynamicHomeTestimonials === 'function') {
          window.renderDynamicHomeTestimonials();
        }
        if (typeof window.renderDynamicVideos === 'function') {
          window.renderDynamicVideos();
        }
      }
    };
  }

  // Real-time listener: Storage event across tabs
  window.addEventListener('storage', (e) => {
    if (e.key && (e.key.startsWith('nairi_db_') || e.key === CMS_STORAGE_KEY)) {
      applyAllSync();
      if (typeof window.renderDynamicVentures === 'function') {
        window.renderDynamicVentures();
      }
      if (typeof window.renderDynamicHomeVentures === 'function') {
        window.renderDynamicHomeVentures();
      }
      if (typeof window.renderDynamicTestimonials === 'function') {
        window.renderDynamicTestimonials();
      }
      if (typeof window.renderDynamicHomeTestimonials === 'function') {
        window.renderDynamicHomeTestimonials();
      }
      if (typeof window.renderDynamicVideos === 'function') {
        window.renderDynamicVideos();
      }
    }
  });

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
    const footerLogo = document.querySelector('.footer-logo, [data-cms-logo="site.logo"]');
    if (footerLogo) {
      let clickCount = 0;
      let lastClick = 0;
      footerLogo.addEventListener('click', (e) => {
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
    refreshBranding: applyBrandingSync
  };
})();
