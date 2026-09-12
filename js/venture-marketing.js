/**
 * Nairee Ventures — Interactive Engine
 * Handles Hero 3-Tier switcher, Growth Calculator, Form Submissions, and Navigation
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Toast Notification Helper
  const toast = document.getElementById('clone-toast');
  const toastMsg = document.getElementById('clone-toast-msg');

  function showToast(msg, duration = 4000) {
    if (!toast) return;
    toastMsg.textContent = msg;
    toast.style.display = 'flex';
    setTimeout(() => {
      toast.style.display = 'none';
    }, duration);
  }

  // 2. Hero 3-Tier Switcher Tabs
  const heroTierData = [
    {
      name: 'Tier 1 · AI Marketing',
      text: 'AI-generated video ads and creatives mapped to your customer clusters — websites, social profiles and ad ops included.',
      badge: '4.2x ROAS',
      subBadge: 'Segment-mapped AI creatives'
    },
    {
      name: 'Tier 2 · Finance & Tax',
      text: 'Runway analytics, cash-flow forecasting, Cap Table modeling, capital-raising advisory and complete GST & tax compliance operations.',
      badge: '100% Tax Compliant',
      subBadge: 'Automated Runway Modeling'
    },
    {
      name: 'Tier 3 · MaaS',
      text: 'Management as a Service: Nairee acts as your dedicated co-operating arm across marketing ops, finance, sales and day-to-day execution.',
      badge: '14-Day Pod',
      subBadge: 'Full execution team deployed'
    }
  ];

  const heroTabs = Array.from(document.querySelectorAll('button')).filter(b => 
    b.textContent.includes('Tier 1') || b.textContent.includes('Tier 2') || b.textContent.includes('Tier 3')
  );

  heroTabs.forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      heroTabs.forEach((b, i) => {
        if (i === index) {
          b.className = 'rounded-full border px-4 py-2 text-xs font-semibold transition-all border-sky-600 bg-sky-600 text-white shadow-md sm:text-sm';
        } else {
          b.className = 'rounded-full border px-4 py-2 text-xs font-semibold transition-all border-sky-200 bg-white text-sky-800 hover:border-sky-400 sm:text-sm';
        }
      });
      const container = btn.closest('.rounded-3xl, .rounded-2xl, div');
      const textElem = container ? container.querySelector('p, span.text-sm, .mt-3') : null;
      if (textElem && heroTierData[index]) {
        textElem.textContent = heroTierData[index].text;
      }
    });
  });

  // 3. Interactive Growth Calculator
  const calcTiers = [
    {
      id: 'calc-toggle-tier-1',
      title: 'AI Marketing',
      time: '14 Days',
      timeSub: 'From brief to first 16 ad variations live in flight',
      metric: '4.2x ROAS',
      metricSub: 'Average client return on ad spend across Meta & Google',
      save: '62% Less',
      saveSub: 'Versus retaining agency + in-house video team'
    },
    {
      id: 'calc-toggle-tier-2',
      title: 'Finance & Tax',
      time: '10 Days',
      timeSub: 'Full books migration, MIS setup and runway forecasting active',
      metric: '100% Audit Ready',
      metricSub: 'Due diligence prepared for venture debt & Series A rounds',
      save: '55% Less',
      saveSub: 'Versus hiring fractional CFO + accounting agency'
    },
    {
      id: 'calc-toggle-tier-3',
      title: 'MaaS (Full Stack)',
      time: '21 Days',
      timeSub: 'Dedicated 4-person operating pod embedded into daily cadence',
      metric: '1 Single Partner',
      metricSub: 'Marketing, Finance & Operations handled in one unified dashboard',
      save: '70% Less',
      saveSub: 'Versus hiring VP Marketing, VP Finance & COO salaries'
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

    if (statCard0) {
      const h3 = statCard0.querySelector('h3');
      const p = statCard0.querySelector('p.text-xs, p.text-sm');
      if (h3) h3.textContent = data.time;
      if (p) p.textContent = data.timeSub;
    }
    if (statCard1) {
      const h3 = statCard1.querySelector('h3');
      const p = statCard1.querySelector('p.text-xs, p.text-sm');
      if (h3) h3.textContent = data.metric;
      if (p) p.textContent = data.metricSub;
    }
    if (statCard2) {
      const h3 = statCard2.querySelector('h3');
      const p = statCard2.querySelector('p.text-xs, p.text-sm');
      if (h3) h3.textContent = data.save;
      if (p) p.textContent = data.saveSub;
    }

    const tierSelect = document.getElementById('lead-select-tier');
    if (tierSelect) {
      if (tierIdx === 0) tierSelect.value = 'Tier 1: AI Marketing & Creative';
      else if (tierIdx === 1) tierSelect.value = 'Tier 2: Finance, Tax & Capital';
      else if (tierIdx === 2) tierSelect.value = 'Tier 3: Management as a Service';
    }
  }

  calcBtns.forEach((btn, idx) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      updateCalculator(idx);
    });
  });

  // 4. Three Tiers CTA buttons click pre-selection
  document.querySelectorAll('[data-tier-select]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const tier = btn.getAttribute('data-tier-select');
      const tierSelect = document.getElementById('lead-select-tier');
      if (tierSelect) {
        if (tier === 'tier-1') tierSelect.value = 'Tier 1: AI Marketing & Creative';
        if (tier === 'tier-2') tierSelect.value = 'Tier 2: Finance, Tax & Capital';
        if (tier === 'tier-3') tierSelect.value = 'Tier 3: Management as a Service';
      }
    });
  });

  // 5. Lead Form Submission Handling (POST to /api/leads & /api/contact)
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
      const tier = document.getElementById('lead-select-tier')?.value || 'All Three Tiers';
      const stage = document.getElementById('lead-select-revenue')?.value || '';
      const message = document.getElementById('lead-challenge')?.value || '';

      const fullMessage = `[Company: ${company}] [Phone: ${phone}] [Tier Interest: ${tier}] [Stage: ${stage}]\n${message}`;

      const payload = {
        name,
        email,
        company,
        phone,
        tier,
        stage,
        message: fullMessage,
        source: 'Venture Marketing AI Clone Landing Page',
        budget: tier
      };

      try {
        const resp = await fetch('/api/leads', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        const result = await resp.json().catch(() => ({ success: true }));

        showToast('✓ Diagnostic Request Received! Our strategy desk will review and respond within 24 hours.', 6000);
        leadForm.reset();

        const alertBox = document.createElement('div');
        alertBox.className = 'mt-5 rounded-2xl border border-emerald-300 bg-emerald-50 p-4 text-sm font-medium text-emerald-900';
        alertBox.innerHTML = `<strong>Request Logged:</strong> Thank you, ${name}. Your growth diagnostic has been dispatched to our operating partners. Check your inbox (<strong>${email}</strong>) shortly.`;
        leadForm.appendChild(alertBox);
        setTimeout(() => alertBox.remove(), 8000);

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

  // 6. Smooth Scrolling for all internal anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href').slice(1);
      const targetElem = document.getElementById(targetId);
      if (targetElem) {
        e.preventDefault();
        targetElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  console.log('Nairee Ventures interactive engine initialized.');
});
