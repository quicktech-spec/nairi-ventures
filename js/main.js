/**
 * NAIRI VENTURES — AGENCY CLIENT SYSTEM
 * Pure Marketing, AI Video Ads, Conversion Web & Sales Funnels
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initMobileMenu();
  initScrollAnimations();
  initStatsCountUp();
  initFaqAccordion();
  initActiveNavLink();
  initContactForm();
  initTabs();
  initTopVideo();
  initFilmGrain();
  initMagneticCursor();
  initCardSpotlightAndTilt();
  initCinemaLightbox();
  initRoiCalculator();
  initAdAnatomy();
  initMobileDock();
  initHeroAudio();
  initBeforeAfterSlider();
  initScopeBuilder();
});

/* --- Header Scroll Effect (past hero -> solid ivory) --- */
function initHeader() {
  const header = document.querySelector('.site-header');
  const hero = document.querySelector('.hero-section');
  if (!header) return;

  const handleScroll = () => {
    const threshold = hero ? (hero.offsetHeight - 90) : 30;
    if (window.scrollY > threshold) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* --- Mobile Menu Drawer --- */
function initMobileMenu() {
  const toggleBtn = document.querySelector('.menu-toggle');
  const siteNav = document.querySelector('.site-nav');
  if (!toggleBtn || !siteNav) return;

  toggleBtn.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('mobile-open');
    toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  document.addEventListener('click', (e) => {
    if (siteNav.classList.contains('mobile-open') && !siteNav.contains(e.target) && !toggleBtn.contains(e.target)) {
      siteNav.classList.remove('mobile-open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && siteNav.classList.contains('mobile-open')) {
      siteNav.classList.remove('mobile-open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    }
  });
}

/* --- Scroll Fade-Up --- */
function initScrollAnimations() {
  document.documentElement.classList.add('js-ready');
  const fadeElements = document.querySelectorAll('.fade-up');
  if (!fadeElements.length) return;

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.05,
      rootMargin: '50px 0px 50px 0px'
    });

    fadeElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('is-visible');
      } else {
        observer.observe(el);
      }
    });
  } else {
    fadeElements.forEach((el) => el.classList.add('is-visible'));
  }
}

/* --- Active Navigation Highlighting --- */
function initActiveNavLink() {
  const path = window.location.pathname;
  const pageName = path.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.site-nav .nav-link');

  navLinks.forEach((link) => {
    const href = link.getAttribute('href');
    if (href === pageName || (pageName === '' && href === 'index.html') || (pageName === 'ventures.html' && href === 'services.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

/* --- Contact Form Handling --- */
function initContactForm() {
  const form = document.getElementById('nairi-contact-form');
  const statusBox = document.getElementById('form-status');
  if (!form || !statusBox) return;

  // Auto-prefill if redirected from ROI Calculator, Scope Builder, or Teardown Audit
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const msgField = document.getElementById('message');
    const webField = document.getElementById('website_url');

    if (urlParams.has('audit_url')) {
      const auditVal = urlParams.get('audit_url');
      if (webField) webField.value = auditVal;
      if (msgField && !msgField.value) {
        msgField.value = `Requesting a free 3-minute video teardown of our creative conversion leaks for: ${auditVal}`;
      }
    } else if (urlParams.has('scope')) {
      const scopeData = urlParams.get('scope');
      const days = urlParams.get('days') || '5-7';
      const assets = urlParams.get('assets') || 'Custom';
      if (msgField && !msgField.value) {
        msgField.value = `I configured a custom sprint package (${days} Days, ${assets} Deliverables):\n- ${scopeData.replace(/\|/g, '\n- ')}\n\nI would like to lock in this sprint.`;
      }
    } else if (urlParams.has('spend') && urlParams.has('videos')) {
      if (msgField && !msgField.value) {
        msgField.value = `I calculated my estimated monthly ad spend at $${Number(urlParams.get('spend')).toLocaleString()} for ${urlParams.get('videos')} video ad variations. I would like to lock in this agile production rate.`;
      }
    }
  } catch (err) {
    console.warn('URL param parse error:', err);
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const budgetInput = document.getElementById('budget');
    const websiteInput = document.getElementById('website_url');
    const submitBtn = form.querySelector('button[type="submit"]');

    if (!nameInput.value.trim()) {
      showStatus('Please provide your name.', 'error');
      nameInput.focus();
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
      showStatus('Please enter a valid email address.', 'error');
      emailInput.focus();
      return;
    }

    if (!messageInput.value.trim()) {
      showStatus('Please tell us what is not working or what you want to fix.', 'error');
      messageInput.focus();
      return;
    }

    const originalBtnText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    const fullMessage = (websiteInput && websiteInput.value.trim() ? `[Website/URL: ${websiteInput.value.trim()}]\n` : '') + messageInput.value.trim();

    const leadData = {
      name: nameInput.value.trim(),
      email: emailInput.value.trim(),
      venture_interest: budgetInput ? (budgetInput.value || 'General Marketing') : 'General Marketing',
      message: fullMessage,
      status: 'New'
    };

    try {
      if (window.NairiDB && typeof window.NairiDB.addLead === 'function') {
        await window.NairiDB.addLead(leadData);
      }
      showStatus('Thank you. We have received your message and will review whether we are the right fit within 24 hours.', 'success');
      form.reset();
    } catch (err) {
      console.warn('Lead submission fallback:', err);
      showStatus('Thank you. Your inquiry has been sent.', 'success');
      form.reset();
    } finally {
      submitBtn.textContent = originalBtnText;
      submitBtn.disabled = false;
    }
  });

  function showStatus(msg, type) {
    statusBox.textContent = msg;
    statusBox.className = `form-status ${type}`;
    statusBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

/* --- Stats Bar Count-Up (~1.2s) --- */
function initStatsCountUp() {
  const statsSection = document.querySelector('.section-stats-bar, .numbers-strip');
  if (!statsSection) return;

  let animated = false;
  const counters = statsSection.querySelectorAll('.count-up');
  if (!counters.length) return;

  const runCountUp = () => {
    if (animated) return;
    animated = true;

    counters.forEach((el, index) => {
      const target = parseInt(el.getAttribute('data-target'), 10) || 0;
      const duration = 1200;
      const staggerDelay = index * 100;

      setTimeout(() => {
        let startTimestamp = null;
        const step = (timestamp) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);
          const currentVal = Math.floor(progress * (2 - progress) * target);
          el.textContent = currentVal;
          if (progress < 1) {
            window.requestAnimationFrame(step);
          } else {
            el.textContent = target;
          }
        };
        window.requestAnimationFrame(step);
      }, staggerDelay);
    });
  };

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          runCountUp();
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    observer.observe(statsSection);
  } else {
    runCountUp();
  }
}

/* --- FAQ Accordion --- */
function initFaqAccordion() {
  const items = document.querySelectorAll('.faq-item');
  if (!items.length) return;

  items.forEach((item) => {
    const btn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    if (!btn || !answer) return;

    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');

      // Close all other rows
      items.forEach((other) => {
        if (other !== item) {
          other.classList.remove('active');
          const otherBtn = other.querySelector('.faq-question');
          const otherAns = other.querySelector('.faq-answer');
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
          if (otherAns) otherAns.style.maxHeight = null;
        }
      });

      // Toggle clicked row
      if (isOpen) {
        item.classList.remove('active');
        btn.setAttribute('aria-expanded', 'false');
        answer.style.maxHeight = null;
      } else {
        item.classList.add('active');
        btn.setAttribute('aria-expanded', 'true');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/* --- Toolkit Tabs Handler --- */
function initTabs() {
  const tabBtns = document.querySelectorAll('.toolkit-tab-btn, .cap-tab-btn');
  if (!tabBtns.length) return;

  tabBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-tab');
      if (!targetId) return;

      const navContainer = btn.closest('.toolkit-tab-nav, .cap-tabs-nav');
      const parentSection = btn.closest('section, .tab-section');

      if (navContainer) {
        navContainer.querySelectorAll('.toolkit-tab-btn, .cap-tab-btn').forEach(b => b.classList.remove('active'));
      }
      btn.classList.add('active');

      if (parentSection) {
        parentSection.querySelectorAll('.toolkit-pane, .cap-tab-pane').forEach(p => p.classList.remove('active'));
      } else {
        document.querySelectorAll('.toolkit-pane, .cap-tab-pane').forEach(p => p.classList.remove('active'));
      }

      const targetPane = document.getElementById(targetId);
      if (targetPane) {
        targetPane.classList.add('active');
      }
    });
  });
}

/* --- Video Embed URL Parser (YouTube, Vimeo, Loom, MP4) --- */
function parseVideoEmbedUrl(url) {
  if (!url || typeof url !== 'string') return null;
  url = url.trim();
  if (!url) return null;

  // 1. YouTube
  const ytRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?|shorts)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i;
  const ytMatch = url.match(ytRegex);
  if (ytMatch && ytMatch[1]) {
    return {
      type: 'iframe',
      src: `https://www.youtube-nocookie.com/embed/${ytMatch[1]}?rel=0&modestbranding=1&autoplay=0`
    };
  }

  // 2. Vimeo
  const vimeoRegex = /(?:vimeo\.com\/)(\d+)/i;
  const vimeoMatch = url.match(vimeoRegex);
  if (vimeoMatch && vimeoMatch[1]) {
    return {
      type: 'iframe',
      src: `https://player.vimeo.com/video/${vimeoMatch[1]}?dnt=1`
    };
  }

  // 3. Loom
  const loomRegex = /loom\.com\/(?:share|embed)\/([a-zA-Z0-9]+)/i;
  const loomMatch = url.match(loomRegex);
  if (loomMatch && loomMatch[1]) {
    return {
      type: 'iframe',
      src: `https://www.loom.com/embed/${loomMatch[1]}`
    };
  }

  // 4. Direct HTML5 Video File (.mp4, .webm, .ogg, .mov)
  if (/\.(mp4|webm|ogg|mov)(\?.*)?$/i.test(url) || url.startsWith('blob:') || url.startsWith('data:video')) {
    return {
      type: 'video',
      src: url
    };
  }

  // 5. Generic embed link
  if (/^https?:\/\//i.test(url)) {
    return {
      type: 'iframe',
      src: url
    };
  }

  return null;
}
window.parseVideoEmbedUrl = parseVideoEmbedUrl;

/* --- Top Video Player Initialization & Real-Time Sync --- */
function initTopVideo() {
  const playerBox = document.getElementById('top-video-player-box');
  if (!playerBox) return;

  function getCmsVideoData() {
    let videoUrl = '';
    let posterUrl = '';

    try {
      const raw = localStorage.getItem('nairi_db_page_content');
      if (raw) {
        const list = JSON.parse(raw);
        if (Array.isArray(list)) {
          const uItem = list.find(p => p && p.section_key === 'home.top_video.url');
          if (uItem && uItem.content) videoUrl = uItem.content.trim();
          const pItem = list.find(p => p && p.section_key === 'home.top_video.poster');
          if (pItem && pItem.content) posterUrl = pItem.content.trim();
        }
      }
    } catch (e) {}

    if (!videoUrl) {
      videoUrl = playerBox.getAttribute('data-video-url') || '';
    }

    return { videoUrl, posterUrl };
  }

  function renderVideo(url, poster) {
    const embed = parseVideoEmbedUrl(url);

    if (!embed) {
      // Fallback placeholder with interactive play trigger
      playerBox.innerHTML = `
        <div class="top-video-placeholder" id="top-video-placeholder-inner" ${poster ? `style="background-image: linear-gradient(135deg, rgba(23, 21, 18, 0.78), rgba(35, 32, 28, 0.72)), url('${poster}'); background-size: cover; background-position: center;"` : ''}>
          <div class="top-video-play-btn" id="btn-top-video-play" aria-label="Play Video" role="button" tabindex="0">
            <svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
          </div>
          <h3 class="top-video-placeholder-title">See How Our AI Video &amp; Funnel System Works</h3>
          <p class="top-video-placeholder-hint">Click the play button or insert any YouTube, Vimeo, Loom, or MP4 URL in the Admin Panel to feature your video here.</p>
        </div>
      `;

      const playBtn = playerBox.querySelector('#btn-top-video-play');
      if (playBtn) {
        playBtn.addEventListener('click', () => {
          // Play standard sample reel if clicked before custom URL is configured
          renderVideo('https://www.youtube.com/watch?v=dQw4w9WgXcQ', poster);
        });
      }
      return;
    }

    if (embed.type === 'iframe') {
      playerBox.innerHTML = `<iframe src="${embed.src}" title="Featured Video Showcase" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="width: 100%; height: 100%; border: 0;"></iframe>`;
    } else if (embed.type === 'video') {
      playerBox.innerHTML = `<video src="${embed.src}" ${poster ? `poster="${poster}"` : ''} controls playsinline preload="metadata" style="width: 100%; height: 100%; object-fit: cover;"></video>`;
    }
  }

  const { videoUrl, posterUrl } = getCmsVideoData();
  renderVideo(videoUrl, posterUrl);

  // Listen for real-time video updates from CMS or Admin
  window.addEventListener('top_video_updated', (e) => {
    if (e.detail) {
      renderVideo(e.detail.url, e.detail.poster);
    } else {
      const fresh = getCmsVideoData();
      renderVideo(fresh.videoUrl, fresh.posterUrl);
    }
  });
}
window.initTopVideo = initTopVideo;

/* ==========================================================================
   CONTEST-TIER UI/UX INTERACTION ENGINE
   ========================================================================== */

/* 1. Subtle Film Grain Overlay */
function initFilmGrain() {
  if (document.querySelector('.film-grain-overlay')) return;
  const grain = document.createElement('div');
  grain.className = 'film-grain-overlay';
  grain.setAttribute('aria-hidden', 'true');
  document.body.appendChild(grain);
}

/* 2. Magnetic Fluid Cursor (Desktop Pointer Only) */
function initMagneticCursor() {
  const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || window.matchMedia('(hover: none)').matches;
  if (isTouchDevice) return;

  if (document.querySelector('.custom-cursor-dot')) return;

  const dot = document.createElement('div');
  dot.className = 'custom-cursor-dot';
  const ring = document.createElement('div');
  ring.className = 'custom-cursor-ring';
  ring.innerHTML = '<span class="cursor-label"></span>';
  const label = ring.querySelector('.cursor-label');

  document.body.appendChild(dot);
  document.body.appendChild(ring);

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;
  let isVisible = false;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
    if (!isVisible) {
      isVisible = true;
      dot.style.opacity = '1';
      ring.style.opacity = '1';
    }
  });

  window.addEventListener('mouseleave', () => {
    isVisible = false;
    dot.style.opacity = '0';
    ring.style.opacity = '0';
  });

  // Smooth lerp loop for outer ring
  function renderCursor() {
    ringX += (mouseX - ringX) * 0.2;
    ringY += (mouseY - ringY) * 0.2;
    ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
    requestAnimationFrame(renderCursor);
  }
  requestAnimationFrame(renderCursor);

  // Hover detection for buttons, links, inputs
  const hoverSelector = 'a, button, .btn, input, select, textarea, .option-choice-btn, .roi-range-input, .faq-question, .anatomy-tab-btn';
  document.addEventListener('mouseover', (e) => {
    const target = e.target.closest(hoverSelector);
    const videoTarget = e.target.closest('.hero-video-panel, .top-video-player-wrap, .hero-showreel-pill, [data-video-modal], .top-video-play-btn');

    if (videoTarget) {
      ring.classList.add('cursor-play');
      label.textContent = 'PLAY';
    } else if (target) {
      ring.classList.add('cursor-hover');
      label.textContent = '';
    } else {
      ring.classList.remove('cursor-hover', 'cursor-play');
      label.textContent = '';
    }
  });
}

/* 3. Mouse-Following Spotlight & 3D Tilt Physics */
function initCardSpotlightAndTilt() {
  const cards = document.querySelectorAll('.cap-card, .pricing-card, .testimonial-card, .roi-calc-container, .anatomy-detail-box, .hero-video-panel, .panel-card');
  if (!cards.length) return;

  const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);

  cards.forEach(card => {
    card.classList.add('spotlight-card');

    if (isTouchDevice) return;

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);

      // Gentle 3D perspective tilt
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-3px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    });
  });
}

/* 4. Fullscreen Cinema Lightbox Theatre Modal */
function initCinemaLightbox() {
  let modal = document.getElementById('modal-cinema-theatre');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'modal-cinema-theatre';
    modal.className = 'modal-cinema-theatre';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-label', 'Cinema Video Theatre');

    modal.innerHTML = `
      <div class="cinema-modal-card">
        <div class="cinema-modal-header">
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <span style="display: inline-block; width: 8px; height: 8px; border-radius: 50%; background: #E4A63A;"></span>
            <span style="font-weight: 700; font-size: 0.85rem; letter-spacing: 0.05em; text-transform: uppercase;">NAIREE SHOWREEL &amp; PRODUCTION THEATRE</span>
          </div>
          <button type="button" class="btn-cinema-close" id="btn-cinema-close" aria-label="Close Theatre">Esc / ✕ Close</button>
        </div>
        <div class="cinema-modal-body" id="cinema-modal-body">
          <!-- Video injected dynamically -->
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  }

  const closeBtn = modal.querySelector('#btn-cinema-close');
  const bodyEl = modal.querySelector('#cinema-modal-body');

  function openCinema(videoSrc) {
    const src = videoSrc || 'videos/hero-reel-1.mp4';
    bodyEl.innerHTML = `<video src="${src}" autoplay controls playsinline style="width: 100%; height: 100%; object-fit: cover;"></video>`;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeCinema() {
    modal.classList.remove('active');
    bodyEl.innerHTML = '';
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeCinema);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeCinema();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) closeCinema();
  });

  // Attach triggers
  document.querySelectorAll('#btn-hero-showreel, .hero-showreel-pill, [data-cinema-trigger]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const customUrl = btn.getAttribute('data-video-url');
      openCinema(customUrl);
    });
  });
}

/* 5. Interactive ROI & Agency Cost Comparison Calculator */
function initRoiCalculator() {
  const spendSlider = document.getElementById('roi-slider-spend');
  const videosSlider = document.getElementById('roi-slider-videos');
  const spendDisplay = document.getElementById('roi-display-spend');
  const videosDisplay = document.getElementById('roi-display-videos');
  const savingsDisplay = document.getElementById('roi-display-savings');
  const traditionalCostDisplay = document.getElementById('roi-display-traditional-cost');
  const naireeCostDisplay = document.getElementById('roi-display-nairee-cost');
  const lockBtn = document.getElementById('btn-roi-lock-rate');

  if (!spendSlider || !videosSlider) return;

  function updateRoi() {
    const spend = parseInt(spendSlider.value, 10) || 25000;
    const videos = parseInt(videosSlider.value, 10) || 16;

    if (spendDisplay) spendDisplay.textContent = `$${spend.toLocaleString()}`;
    if (videosDisplay) videosDisplay.textContent = `${videos} Videos`;

    // Formula: Traditional Retainer + per-asset production vs Nairee High-Velocity System
    const traditionalBase = Math.max(12000, spend * 0.20);
    const traditionalAssetCost = videos * 750;
    const traditionalTotal = Math.round(traditionalBase + traditionalAssetCost);

    // Nairee flat agile pricing
    const naireeBase = 3500;
    const naireeAssetCost = Math.max(0, (videos - 8) * 120);
    const naireeTotal = Math.round(naireeBase + naireeAssetCost);

    const monthlySavings = Math.max(2500, traditionalTotal - naireeTotal);

    if (traditionalCostDisplay) traditionalCostDisplay.textContent = `$${traditionalTotal.toLocaleString()}/mo`;
    if (naireeCostDisplay) naireeCostDisplay.textContent = `$${naireeTotal.toLocaleString()}/mo`;
    if (savingsDisplay) savingsDisplay.textContent = `$${monthlySavings.toLocaleString()} / mo`;
  }

  spendSlider.addEventListener('input', updateRoi);
  videosSlider.addEventListener('input', updateRoi);
  updateRoi();

  if (lockBtn) {
    lockBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const spend = spendSlider.value;
      const videos = videosSlider.value;
      const contactSection = document.getElementById('contact');

      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
        const msgField = document.getElementById('message');
        if (msgField) {
          msgField.value = `I calculated my estimated monthly ad spend at $${Number(spend).toLocaleString()} for ${videos} video ad variations. I would like to lock in this agile production rate.`;
        }
      } else {
        window.location.href = `contact.html?spend=${encodeURIComponent(spend)}&videos=${encodeURIComponent(videos)}`;
      }
    });
  }
}

/* 6. Interactive 4-Part Ad Anatomy Breakdown */
function initAdAnatomy() {
  const tabs = document.querySelectorAll('.anatomy-tab-btn');
  const boxes = document.querySelectorAll('.anatomy-detail-box');
  if (!tabs.length || !boxes.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const step = tab.getAttribute('data-step');
      if (!step) return;

      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      boxes.forEach(box => {
        if (box.getAttribute('data-step') === step) {
          box.classList.add('active');
        } else {
          box.classList.remove('active');
        }
      });
    });
  });
}

/* 7. Mobile Floating Conversion Dock (<768px) */
function initMobileDock() {
  const dock = document.querySelector('.mobile-conversion-dock');
  if (!dock) return;

  let lastScrollY = window.scrollY;
  let isScrolling;

  window.addEventListener('scroll', () => {
    const currentY = window.scrollY;

    // Hide on downward scroll past 150px
    if (currentY > lastScrollY && currentY > 150) {
      dock.classList.add('hidden');
    } else {
      dock.classList.remove('hidden');
    }

    lastScrollY = currentY;

    // Show after scrolling stops
    clearTimeout(isScrolling);
    isScrolling = setTimeout(() => {
      dock.classList.remove('hidden');
    }, 250);
  }, { passive: true });
}

/* 8. Hero Vertical Video Audio Controller */
function initHeroAudio() {
  const btn = document.getElementById('btn-hero-audio');
  const icon = document.getElementById('hero-audio-icon');
  const label = document.getElementById('hero-audio-label');
  const primaryVid = document.getElementById('hero-reel-vid-1');

  if (!btn || !primaryVid) return;

  let isAudioPlaying = false;

  function toggleAudio() {
    isAudioPlaying = !isAudioPlaying;

    if (isAudioPlaying) {
      primaryVid.muted = false;
      primaryVid.volume = 0.85;
      btn.classList.add('playing');
      if (icon) icon.textContent = '🔊';
      if (label) label.textContent = 'Sound On (Tap to Mute)';
    } else {
      primaryVid.muted = true;
      btn.classList.remove('playing');
      if (icon) icon.textContent = '🔇';
      if (label) label.textContent = 'Preview Sound Design';
    }
  }

  btn.addEventListener('click', (e) => {
    e.preventDefault();
    toggleAudio();
  });
}

/* 9. Interactive Before / After Split Screen Slider */
function initBeforeAfterSlider() {
  const container = document.getElementById('split-slider-box');
  const afterPane = document.getElementById('split-pane-after');
  const handle = document.getElementById('split-handle');

  if (!container || !afterPane || !handle) return;

  let isDragging = false;

  function updateSlider(clientX) {
    const rect = container.getBoundingClientRect();
    let offsetX = clientX - rect.left;
    let pct = (offsetX / rect.width) * 100;

    // Constrain between 5% and 95%
    if (pct < 5) pct = 5;
    if (pct > 95) pct = 95;

    afterPane.style.width = `${pct}%`;
    handle.style.left = `${pct}%`;
    handle.setAttribute('aria-valuenow', Math.round(pct));
  }

  // Pointer & Touch Events
  handle.addEventListener('mousedown', () => { isDragging = true; });
  container.addEventListener('mousedown', (e) => {
    isDragging = true;
    updateSlider(e.clientX);
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    updateSlider(e.clientX);
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
  });

  // Touch handlers
  container.addEventListener('touchstart', (e) => {
    if (e.touches && e.touches[0]) {
      isDragging = true;
      updateSlider(e.touches[0].clientX);
    }
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (!isDragging || !e.touches || !e.touches[0]) return;
    updateSlider(e.touches[0].clientX);
  }, { passive: true });

  window.addEventListener('touchend', () => {
    isDragging = false;
  });

  // Keyboard accessibility
  handle.addEventListener('keydown', (e) => {
    let currentPct = parseFloat(handle.style.left) || 50;
    if (e.key === 'ArrowLeft') {
      currentPct = Math.max(5, currentPct - 5);
      afterPane.style.width = `${currentPct}%`;
      handle.style.left = `${currentPct}%`;
      handle.setAttribute('aria-valuenow', Math.round(currentPct));
    } else if (e.key === 'ArrowRight') {
      currentPct = Math.min(95, currentPct + 5);
      afterPane.style.width = `${currentPct}%`;
      handle.style.left = `${currentPct}%`;
      handle.setAttribute('aria-valuenow', Math.round(currentPct));
    }
  });
}

/* 10. Interactive Scope & Deliverables Builder */
function initScopeBuilder() {
  const cards = document.querySelectorAll('.scope-option-card');
  const daysEl = document.getElementById('scope-total-days');
  const assetsEl = document.getElementById('scope-total-assets');
  const lockBtn = document.getElementById('btn-lock-custom-scope');

  if (!cards.length || !daysEl || !assetsEl) return;

  function recalculateScope() {
    let maxDays = 0;
    let totalAssets = 0;
    let selectedServices = [];

    cards.forEach(card => {
      if (card.classList.contains('selected')) {
        const d = parseInt(card.getAttribute('data-days'), 10) || 0;
        const a = parseInt(card.getAttribute('data-assets'), 10) || 0;
        const s = card.getAttribute('data-service') || '';

        if (d > maxDays) maxDays = d;
        totalAssets += a;
        if (s) selectedServices.push(s);
      }
    });

    // Minimum sprint turnaround calculation
    const computedDays = Math.max(2, maxDays + (selectedServices.length > 2 ? 2 : 0));
    daysEl.textContent = `${computedDays} Days`;
    assetsEl.textContent = `${totalAssets} Asset${totalAssets === 1 ? '' : 's'}`;

    return { computedDays, totalAssets, selectedServices };
  }

  cards.forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('selected');
      const box = card.querySelector('.scope-checkbox');
      if (box) {
        box.textContent = card.classList.contains('selected') ? '✓' : '';
      }
      recalculateScope();
    });
  });

  recalculateScope();

  if (lockBtn) {
    lockBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const { computedDays, totalAssets, selectedServices } = recalculateScope();
      const scopeParam = selectedServices.join('|');
      window.location.href = `contact.html?scope=${encodeURIComponent(scopeParam)}&days=${computedDays}&assets=${totalAssets}`;
    });
  }
}


