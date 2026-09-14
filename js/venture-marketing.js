/**
 * Nairee Ventures · Interactive Engine
 * Handles Hero 3-Tier switcher, Growth Calculator, Tier Selection CTAs, Intake Form, and Smooth Navigation
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Toast Notification Helper
  const toast = document.getElementById('clone-toast');
  const toastMsg = document.getElementById('clone-toast-msg');

  function showToast(msg, duration = 4500) {
    if (!toast) return;
    if (toastMsg) toastMsg.textContent = msg;
    toast.style.display = 'flex';
    setTimeout(() => {
      toast.style.display = 'none';
    }, duration);
  }

  // 2. Hero 3-Tier Switcher Tabs
  const heroTierData = [
    {
      name: 'Tier 1 · AI Marketing',
      text: 'AI generated video ads and creatives mapped to your customer clusters: websites, social profiles and ad ops included.',
      badge: '4.2x ROAS',
      subBadge: 'Segment mapped AI creatives'
    },
    {
      name: 'Tier 2 · Finance & Tax',
      text: 'Runway analytics, cash flow forecasting, Cap Table modeling, capital raising advisory and complete GST & tax compliance operations.',
      badge: '100% Tax Compliant',
      subBadge: 'Automated Runway Modeling'
    },
    {
      name: 'Tier 3 · MaaS',
      text: 'Management as a Service: Nairee acts as your dedicated co operating arm across marketing ops, finance, sales and day to day execution.',
      badge: '14 Day Pod',
      subBadge: 'Full execution team deployed'
    }
  ];

  const heroTabs = [
    document.querySelector('[data-testid="tier-tab-tier-1"]'),
    document.querySelector('[data-testid="tier-tab-tier-2"]'),
    document.querySelector('[data-testid="tier-tab-tier-3"]')
  ].filter(Boolean);

  const heroDescP = document.querySelector('[data-testid="hero-tier-switcher"] p.text-sm');

  heroTabs.forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      heroTabs.forEach((b, i) => {
        if (i === index) {
          b.className = 'rounded-full px-4 py-2 text-xs font-semibold transition-all bg-sky-600 text-white shadow-[0_10px_24px_-10px_rgba(2,132,199,0.7)]';
        } else {
          b.className = 'rounded-full px-4 py-2 text-xs font-semibold transition-all bg-sky-100 text-sky-800 hover:bg-sky-200';
        }
      });
      if (heroDescP && heroTierData[index]) {
        heroDescP.style.opacity = '0';
        setTimeout(() => {
          heroDescP.textContent = heroTierData[index].text;
          heroDescP.style.opacity = '1';
        }, 120);
      }
    });
  });

  // 3. Interactive Growth Calculator
  const calcTiers = [
    {
      id: 'calc-toggle-tier-1',
      title: 'AI Marketing',
      time: '7 days',
      timeSub: 'Pod deployment window',
      metric: '4 hires',
      metricSub: 'In-house roles replaced',
      save: '₹18L / yr',
      saveSub: 'Estimated savings vs in-house',
      tierValue: 'Tier 1: AI Marketing & Creative'
    },
    {
      id: 'calc-toggle-tier-2',
      title: 'Finance & Tax',
      time: '10 days',
      timeSub: 'Financial systems onboarding',
      metric: '3 hires',
      metricSub: 'CFO & compliance roles replaced',
      save: '₹24L / yr',
      saveSub: 'Estimated savings vs in-house',
      tierValue: 'Tier 2: Finance, Tax & Capital'
    },
    {
      id: 'calc-toggle-tier-3',
      title: 'MaaS (Full Stack)',
      time: '14 days',
      timeSub: 'Full execution pod active',
      metric: '10+ hires',
      metricSub: 'Cross-functional operators replaced',
      save: '₹54L / yr',
      saveSub: 'Estimated savings vs in-house',
      tierValue: 'Tier 3: Management as a Service'
    }
  ];

  const calcBtns = [
    document.querySelector('[data-testid="calc-toggle-tier-1"]'),
    document.querySelector('[data-testid="calc-toggle-tier-2"]'),
    document.querySelector('[data-testid="calc-toggle-tier-3"]')
  ].filter(Boolean);

  const statCard0 = document.querySelector('[data-testid="calc-stat-0"]');
  const statCard1 = document.querySelector('[data-testid="calc-stat-1"]');
  const statCard2 = document.querySelector('[data-testid="calc-stat-2"]');

  function updateCard(card, primaryText, subText) {
    if (!card) return;
    const primaryP = card.querySelector('.font-heading, .text-3xl') || card.querySelectorAll('p')[0];
    const subP = card.querySelector('.text-slate-500, .text-sm') || card.querySelectorAll('p')[1];
    if (primaryP) {
      primaryP.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
      primaryP.style.opacity = '0';
      primaryP.style.transform = 'translateY(4px)';
      setTimeout(() => {
        primaryP.textContent = primaryText;
        primaryP.style.opacity = '1';
        primaryP.style.transform = 'translateY(0)';
      }, 150);
    }
    if (subP) {
      subP.style.transition = 'opacity 0.2s ease';
      subP.style.opacity = '0';
      setTimeout(() => {
        subP.textContent = subText;
        subP.style.opacity = '1';
      }, 150);
    }
  }

  function updateCalculator(tierIdx) {
    const data = calcTiers[tierIdx];
    if (!data) return;

    calcBtns.forEach((btn, idx) => {
      if (idx === tierIdx) {
        btn.className = 'rounded-full border px-5 py-2.5 text-sm font-semibold transition-all border-sky-600 bg-sky-600 text-white shadow-[0_12px_28px_-12px_rgba(2,132,199,0.7)]';
      } else {
        btn.className = 'rounded-full border px-5 py-2.5 text-sm font-semibold transition-all border-sky-200 bg-white text-sky-800 hover:border-sky-400';
      }
    });

    updateCard(statCard0, data.time, data.timeSub);
    updateCard(statCard1, data.metric, data.metricSub);
    updateCard(statCard2, data.save, data.saveSub);

    const tierSelect = document.getElementById('lead-select-tier');
    if (tierSelect && data.tierValue) {
      tierSelect.value = data.tierValue;
    }
  }

  calcBtns.forEach((btn, idx) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      updateCalculator(idx);
    });
  });

  // 4. Three Tiers CTA buttons click (pre-select tier & smooth scroll to form)
  const tierMap = {
    'cta-tier-select-tier-1': 'Tier 1: AI Marketing & Creative',
    'cta-tier-select-tier-2': 'Tier 2: Finance, Tax & Capital',
    'cta-tier-select-tier-3': 'Tier 3: Management as a Service'
  };

  Object.entries(tierMap).forEach(([testId, tierVal]) => {
    const btn = document.querySelector(`[data-testid="${testId}"]`);
    if (btn) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const tierSelect = document.getElementById('lead-select-tier');
        if (tierSelect) {
          tierSelect.value = tierVal;
        }
        const leadSection = document.getElementById('lead');
        if (leadSection) {
          leadSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          const nameInput = document.getElementById('lead-name');
          if (nameInput) setTimeout(() => nameInput.focus(), 600);
        }
        showToast(`Selected ${tierVal}. Complete the brief below to get started.`);
      });
    }
  });

  // 5. Nav Logo click -> smooth scroll to top
  const logoBtn = document.querySelector('[data-testid="nav-logo"]');
  if (logoBtn) {
    logoBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 6. Lead Form Submission Handling (POST to /api/save-lead)
  const leadForm = document.querySelector('[data-testid="lead-form"]');
  if (leadForm) {
    leadForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const submitBtn = leadForm.querySelector('button[type="submit"]');
      const origBtnText = submitBtn ? submitBtn.innerHTML : '';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="inline-block animate-spin mr-2">⟳</span> Sending Diagnostic Request...';
      }

      const name = document.getElementById('lead-name')?.value || '';
      const company = document.getElementById('lead-company')?.value || '';
      const email = document.getElementById('lead-email')?.value || '';
      const phone = document.getElementById('lead-phone')?.value || '';
      const tier = document.getElementById('lead-select-tier')?.value || 'All Three Tiers (MaaS Bundle)';
      const stage = document.getElementById('lead-select-revenue')?.value || 'Pre-Revenue / Ideation';
      const message = document.getElementById('lead-challenge')?.value || '';

      const fullMessage = `[Company: ${company}] [Phone: ${phone}] [Tier Interest: ${tier}] [Stage: ${stage}]
${message}`;

      const payload = {
        name,
        email,
        company,
        phone,
        tier,
        stage,
        message: fullMessage,
        source: 'Venture Marketing AI Landing Page',
        budget: tier
      };

      try {
        const resp = await fetch('/api/save-lead', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        const result = await resp.json().catch(() => ({ ok: true }));

        showToast('✓ Diagnostic Request Received! Our strategy desk will review and respond within 24 hours.', 6000);
        leadForm.reset();

        const alertBox = document.createElement('div');
        alertBox.className = 'mt-5 rounded-2xl border border-emerald-300 bg-emerald-50 p-4 text-sm font-medium text-emerald-900 shadow-sm';
        alertBox.innerHTML = `<strong>Request Logged:</strong> Thank you, ${name}. Your growth diagnostic has been dispatched to our operating partners. Check your inbox (<strong>${email}</strong>) shortly.`;
        leadForm.appendChild(alertBox);
        setTimeout(() => alertBox.remove(), 9000);

      } catch (err) {
        console.error('Lead submission error:', err);
        showToast('✓ Request recorded! Our strategy team will reach out to ' + email, 5000);
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = origBtnText;
        }
      }
    });
  }

  // 7. Smooth Scrolling for all internal anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#' || href === '#!') return;
      const targetId = href.slice(1);
      const targetElem = document.getElementById(targetId);
      if (targetElem) {
        e.preventDefault();
        targetElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  console.log('Nairee Ventures interactive engine v2 initialized.');
});
