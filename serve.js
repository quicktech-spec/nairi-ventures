const http = require('http');
const fs = require('fs');
const path = require('path');
let nodemailer = null;
try {
  nodemailer = require('nodemailer');
} catch (e) {
  console.warn('[MAILER] Nodemailer optional require:', e.message);
}

const PORT = process.env.PORT || 3300;
const ROOT = __dirname;
const DATA_FILE = path.join(ROOT, 'data', 'cms-data.json');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.ico': 'image/x-icon',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.ogg': 'video/ogg',
  '.webp': 'image/webp'
};

function readCMSData() {
  try {
    if (fs.existsSync(DATA_FILE)) {
      return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
    }
  } catch (e) {
    console.error('Error reading CMS data:', e);
  }
  return { page_content: [], ventures: [], testimonials: [] };
}

function writeCMSData(data) {
  try {
    const dir = path.dirname(DATA_FILE);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf8');
  } catch (e) {
    console.error('Error writing CMS data:', e);
  }
}

// ADMIN CMS RESTRICTION: Exclusively connected to the Main Website (index.html / clone-preview.html)
function resolveTargetPages(pageFile, sectionKey) {
  return ['index.html', 'clone-preview.html'];
}

// Physically update HTML file on disk so changes become permanent
function updateHtmlFileContent(pageFile, sectionKey, newContent, isDeleted) {
  try {
    const targetPages = resolveTargetPages(pageFile, sectionKey);
    targetPages.forEach(p => {
      const htmlPath = path.join(ROOT, p);
      if (!fs.existsSync(htmlPath)) return;
      let html = fs.readFileSync(htmlPath, 'utf8');

      // Regex to match element with data-cms-key="sectionKey"
      const regex = new RegExp(`(<[^>]+data-cms-key=["']${sectionKey}["'][^>]*>)([\\s\\S]*?)(<\\/[a-zA-Z0-9]+>)`, 'i');
      if (regex.test(html)) {
        if (isDeleted) {
          html = html.replace(regex, `$1$3`);
        } else {
          html = html.replace(regex, `$1${newContent}$3`);
        }
        fs.writeFileSync(htmlPath, html, 'utf8');
        console.log(`[FILE SYNC] Updated ${sectionKey} directly in ${p}`);
      }

      if (sectionKey === 'home.top_video.url') {
        html = html.replace(/(id=["']top-video-player-box["'][^>]*data-video-url=["'])[^"']*(")/i, `$1${newContent}$2`);
        fs.writeFileSync(htmlPath, html, 'utf8');
        console.log(`[VIDEO SYNC] Updated top video URL attribute directly in ${p}`);
      }
    });
  } catch (err) {
    console.error('[FILE SYNC ERROR]:', err);
  }
}

// Physically update an image src or background-image in HTML file (Main Website only)
function updateHtmlImage(pageFile, elementKey, newUrl, altText) {
  try {
    const targetPages = ['index.html', 'clone-preview.html'];
    targetPages.forEach(p => {
      const htmlPath = path.join(ROOT, p);
      if (!fs.existsSync(htmlPath)) return;
      let html = fs.readFileSync(htmlPath, 'utf8');

      // Look for element with data-cms-img="elementKey"
      const tagRegex = new RegExp(`(<[^>]+data-cms-img=["']${elementKey}["'][^>]*>)`, 'i');
      const match = tagRegex.exec(html);
      if (match) {
        let tag = match[1];
        if (/src=["'][^"']*["']/i.test(tag)) {
          tag = tag.replace(/src=["'][^"']*["']/i, `src="${newUrl}"`);
          if (altText && /alt=["'][^"']*["']/i.test(tag)) {
            tag = tag.replace(/alt=["'][^"']*["']/i, `alt="${altText}"`);
          }
        } else if (/style=["'][^"']*["']/i.test(tag)) {
          if (/background-image:[^;"]+/i.test(tag)) {
            tag = tag.replace(/background-image:\s*url\([^)]+\)/i, `background-image: url('${newUrl}')`);
          } else {
            tag = tag.replace(/style=["']([^"']*)["']/i, `style="$1; background-image: url('${newUrl}');"`);
          }
        } else {
          tag = tag.replace(/>$/, ` style="background-image: url('${newUrl}');">`);
        }
        html = html.replace(match[1], tag);
        fs.writeFileSync(htmlPath, html, 'utf8');
        console.log(`[IMAGE SYNC] Updated image ${elementKey} directly in ${p}`);
      }
    });
  } catch (err) {
    console.error('[IMAGE SYNC ERROR]:', err);
  }
}

// Physically update global brand logo text and logo image across Main Website pages
function updateHtmlLogo(newLogoText, logoImage) {
  const pages = ['index.html', 'clone-preview.html'];
  pages.forEach(p => {
    try {
      const htmlPath = path.join(ROOT, p);
      if (!fs.existsSync(htmlPath)) return;
      let html = fs.readFileSync(htmlPath, 'utf8');

      // Update standard data-cms-logo links (if any)
      const logoContainers = /(<a[^>]+data-cms-logo=["']site\.logo["'][^>]*>)([\s\S]*?)(<\/a>)/gi;
      if (logoContainers.test(html)) {
        html = html.replace(logoContainers, (match, openTag, inner, closeTag) => {
          let content = '';
          const isFooter = openTag.includes('footer-logo');
          const brandText = newLogoText !== undefined && newLogoText !== null && newLogoText !== '' ? newLogoText : 'Nairee';

          if (logoImage) {
            const finalSrc = (isFooter && (logoImage.includes('navy') || logoImage.includes('icon.svg')))
              ? (logoImage.replace('navy', 'white'))
              : logoImage;
            content = `\n        <img src="${finalSrc}" alt="${brandText}" class="custom-logo-icon" id="${isFooter ? 'site-footer-logo-icon' : 'site-logo-icon'}">\n        <span class="logo-text" id="${isFooter ? 'site-footer-logo-text' : 'site-logo-text'}" data-cms-key="site.logo_text">${brandText}</span>\n      `;
          } else {
            content = `\n        <span class="logo-text" id="${isFooter ? 'site-footer-logo-text' : 'site-logo-text'}" data-cms-key="site.logo_text">${brandText}</span>\n      `;
          }
          return `${openTag}${content}${closeTag}`;
        });
      }

      // Update landing page header logo button
      const navLogoBtnRegex = /(<button[^>]+data-testid=["']nav-logo["'][^>]*>)([\s\S]*?)(<\/button>)/i;
      if (navLogoBtnRegex.test(html)) {
        html = html.replace(navLogoBtnRegex, (match, openTag, inner, closeTag) => {
          let updatedInner = inner;
          if (logoImage) {
            updatedInner = updatedInner.replace(/<img[^>]+src=["'][^"']*["']/i, `<img src="${logoImage}"`);
          }
          if (newLogoText !== undefined && newLogoText !== null && newLogoText !== '') {
            updatedInner = updatedInner.replace(/(<span[^>]*>)([\s\S]*?)(<\/span>)/i, `$1${newLogoText}$3`);
          }
          return `${openTag}${updatedInner}${closeTag}`;
        });
      }

      // Update landing page footer brand logo block
      const footerLogoBlockRegex = /(<div[^>]+data-testid=["']footer-logo-block["'][^>]*>)([\s\S]*?)(<\/div>)/i;
      if (footerLogoBlockRegex.test(html)) {
        html = html.replace(footerLogoBlockRegex, (match, openTag, inner, closeTag) => {
          let updatedInner = inner;
          if (logoImage) {
            const footerSrc = (logoImage.includes('navy') || logoImage.includes('icon.svg'))
              ? logoImage.replace('navy', 'white')
              : logoImage;
            updatedInner = updatedInner.replace(/<img[^>]+src=["'][^"']*["']/i, `<img src="${footerSrc}"`);
          }
          if (newLogoText !== undefined && newLogoText !== null && newLogoText !== '') {
            updatedInner = updatedInner.replace(/(<span[^>]+data-cms-key=["']brand\.footer_name["'][^>]*>)([\s\S]*?)(<\/span>)/i, `$1<span class="text-sky-400">${newLogoText}</span>$3`);
          }
          return `${openTag}${updatedInner}${closeTag}`;
        });
      }

      fs.writeFileSync(htmlPath, html, 'utf8');
      console.log(`[LOGO SYNC] Updated brand logo (icon: ${logoImage || 'none'}, text: "${newLogoText}") in ${p}`);
    } catch (e) {
      console.error('[LOGO SYNC ERROR]:', e);
    }
  });
}

// Physically update CSS fonts in style.css
function updateCssFonts(fontSerif, fontSans, accentColor) {
  try {
    const cssPath = path.join(ROOT, 'css', 'style.css');
    if (!fs.existsSync(cssPath)) return;
    let css = fs.readFileSync(cssPath, 'utf8');

    if (fontSerif) {
      css = css.replace(/--font-serif:[^;]+;/i, `--font-serif: '${fontSerif}', Georgia, serif;`);
    }
    if (fontSans) {
      css = css.replace(/--font-sans:[^;]+;/i, `--font-sans: '${fontSans}', -apple-system, BlinkMacSystemFont, sans-serif;`);
    }
    if (accentColor) {
      css = css.replace(/--color-amber:[^;]+;/i, `--color-amber: ${accentColor};`);
    }
    fs.writeFileSync(cssPath, css, 'utf8');
    console.log(`[CSS SYNC] Updated typography & colors in css/style.css`);
  } catch (e) {
    console.error('[CSS SYNC ERROR]:', e);
  }
}

// Physically update granular typography across Main Website pages on disk
function updateDiskTypography(branding) {
  if (!branding || typeof branding !== 'object') return;
  const targetPages = ['index.html', 'clone-preview.html'];

  const headingFont = branding.font_heading || branding.font_serif || 'Fraunces';
  const subheadingFont = branding.font_subheading || branding.font_sans || 'General Sans';
  const bodyFont = branding.font_body || branding.font_sans || 'General Sans';
  const monoFont = branding.font_mono || 'JetBrains Mono';
  const accentColor = branding.accent_color || '#0284C7';

  const fontshareMap = {
    'general sans': 'https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600,700&display=swap',
    'satoshi': 'https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap',
    'cabinet grotesk': 'https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@400,500,700,800&display=swap',
    'clash display': 'https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&display=swap'
  };

  const fontsToLoad = [headingFont, subheadingFont, bodyFont, monoFont].filter(Boolean);
  const uniqueFonts = [...new Set(fontsToLoad)];

  targetPages.forEach(p => {
    try {
      const htmlPath = path.join(ROOT, p);
      if (!fs.existsSync(htmlPath)) return;
      let html = fs.readFileSync(htmlPath, 'utf8');

      // 1. Update CSS variables in <style>
      if (html.includes('--font-heading:')) {
        html = html.replace(/--font-heading:\s*[^;]+;/gi, `--font-heading: '${headingFont}', Georgia, serif;`);
      }
      if (html.includes('--font-subheading:')) {
        html = html.replace(/--font-subheading:\s*[^;]+;/gi, `--font-subheading: '${subheadingFont}', -apple-system, BlinkMacSystemFont, sans-serif;`);
      }
      if (html.includes('--font-body:')) {
        html = html.replace(/--font-body:\s*[^;]+;/gi, `--font-body: '${bodyFont}', -apple-system, BlinkMacSystemFont, sans-serif;`);
      }
      if (html.includes('--font-mono:')) {
        html = html.replace(/--font-mono:\s*[^;]+;/gi, `--font-mono: '${monoFont}', ui-monospace, monospace;`);
      }

      // Legacy fallback variables
      if (html.includes('--font-serif:')) {
        html = html.replace(/--font-serif:\s*[^;]+;/gi, `--font-serif: '${headingFont}', Georgia, serif;`);
      }
      if (html.includes('--font-sans:')) {
        html = html.replace(/--font-sans:\s*[^;]+;/gi, `--font-sans: '${bodyFont}', -apple-system, BlinkMacSystemFont, sans-serif;`);
      }

      // 2. Inject font stylesheet links into <head> if not already present
      uniqueFonts.forEach(font => {
        const lower = font.toLowerCase().trim();
        if (fontshareMap[lower]) {
          const url = fontshareMap[lower];
          if (!html.includes(url)) {
            html = html.replace('</head>', `  <link href="${url}" rel="stylesheet">\n</head>`);
          }
        } else if (!['georgia', 'times new roman', 'arial', 'helvetica', 'sans-serif', 'serif', 'monospace'].includes(lower)) {
          const slug = encodeURIComponent(font).replace(/%20/g, '+');
          if (!html.includes(slug)) {
            const googleUrl = `https://fonts.googleapis.com/css2?family=${slug}:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,600&display=swap`;
            html = html.replace('</head>', `  <link href="${googleUrl}" rel="stylesheet">\n</head>`);
          }
        }
      });

      fs.writeFileSync(htmlPath, html, 'utf8');
      console.log(`[DISK TYPOGRAPHY SYNC] Updated typography in ${p}`);
    } catch (e) {
      console.error(`[DISK TYPOGRAPHY SYNC ERROR in ${p}]:`, e);
    }
  });

  // Also update css/style.css
  updateCssFonts(headingFont, bodyFont, accentColor);
}

// --- Lead Email Alerts & Dual-Gmail Forwarding Subsystem ---
function getEmailAlertSettings() {
  const data = readCMSData();
  if (!data.lead_email_settings) {
    data.lead_email_settings = {
      enabled: true,
      gmail_1: "ventures.nairi@gmail.com",
      gmail_2: "leads.nairee@gmail.com",
      sender_name: "Nairi Ventures Leads",
      smtp_user: "",
      smtp_pass: "",
      last_updated: new Date().toISOString()
    };
    writeCMSData(data);
  }
  return data.lead_email_settings;
}

function saveEmailAlertSettings(settings) {
  const data = readCMSData();
  const current = getEmailAlertSettings();
  const updated = {
    ...current,
    enabled: settings.enabled !== undefined ? Boolean(settings.enabled) : current.enabled,
    gmail_1: typeof settings.gmail_1 === 'string' ? settings.gmail_1.trim() : current.gmail_1,
    gmail_2: typeof settings.gmail_2 === 'string' ? settings.gmail_2.trim() : current.gmail_2,
    sender_name: settings.sender_name || current.sender_name,
    smtp_user: typeof settings.smtp_user === 'string' ? settings.smtp_user.trim() : current.smtp_user,
    last_updated: new Date().toISOString()
  };

  // Only overwrite smtp_pass if a non-empty string is provided
  if (typeof settings.smtp_pass === 'string' && settings.smtp_pass.trim().length > 0) {
    updated.smtp_pass = settings.smtp_pass.trim();
  }

  data.lead_email_settings = updated;
  writeCMSData(data);
  return updated;
}

function logEmailAlert(logEntry) {
  try {
    const data = readCMSData();
    if (!data.email_alert_logs) data.email_alert_logs = [];
    data.email_alert_logs.unshift(logEntry);
    if (data.email_alert_logs.length > 100) {
      data.email_alert_logs = data.email_alert_logs.slice(0, 100);
    }
    writeCMSData(data);
  } catch (e) {
    console.error('[EMAIL LOG ERROR]:', e);
  }
}

async function sendLeadAlertEmails(lead, reqOrigin) {
  const settings = getEmailAlertSettings();
  if (settings.enabled === false) {
    console.log('[EMAIL ALERTS] Forwarding is disabled in settings.');
    return { status: 'DISABLED', message: 'Email alerts currently paused' };
  }

  const recipients = [settings.gmail_1, settings.gmail_2].map(g => (g || '').trim()).filter(Boolean);
  if (!recipients.length) {
    console.warn('[EMAIL ALERTS] No recipient Gmail addresses configured.');
    return { status: 'NO_RECIPIENTS', message: 'No recipient emails specified' };
  }

  const adminBase = reqOrigin || process.env.PUBLIC_URL || 'http://localhost:3300';
  const adminLink = `${adminBase.replace(/\/+$/, '')}/admin/index.html#section-leads`;

  const clientName = lead.name || lead.fullName || 'Anonymous Visitor';
  const clientEmail = lead.email || 'Not provided';
  const clientVenture = lead.venture_interest || lead.tier || 'General Inquiry';
  const clientMessage = lead.message || lead.bottleneck || '(No detailed message supplied)';
  const clientTime = new Date(lead.created_at || Date.now()).toLocaleString('en-US', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short'
  });

  const subject = `⚡ New Lead Inflow: ${clientName} [${clientVenture}] - Nairi Ventures`;

  const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0E1017; margin: 0; padding: 24px; color: #F8FAFC; }
    .card { max-width: 620px; margin: 0 auto; background: #161922; border-radius: 12px; overflow: hidden; border: 1px solid #272B38; box-shadow: 0 10px 40px rgba(0,0,0,0.5); }
    .header { background: #0B0D13; padding: 28px 32px; border-bottom: 3px solid #D97706; text-align: left; }
    .header h1 { margin: 0 0 8px 0; font-size: 20px; font-weight: 700; color: #FFFFFF; letter-spacing: -0.01em; }
    .header p { margin: 0; font-size: 13px; color: #94A3B8; }
    .badge { display: inline-block; padding: 5px 12px; border-radius: 9999px; font-size: 12px; font-weight: 600; background: rgba(217,119,6,0.15); color: #F59E0B; border: 1px solid rgba(217,119,6,0.3); margin-top: 12px; }
    .content { padding: 32px; background: #161922; }
    .field-row { margin-bottom: 20px; }
    .field-label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; color: #94A3B8; font-weight: 700; margin-bottom: 6px; }
    .field-val { font-size: 15px; color: #FFFFFF; font-weight: 600; background: #1E222D; padding: 12px 16px; border-radius: 8px; border: 1px solid #2E3342; word-break: break-word; }
    .field-val a { color: #F59E0B; text-decoration: none; font-weight: 700; }
    .message-box { font-size: 15px; line-height: 1.6; color: #FFFFFF; background: #1D2433; border: 1px solid #334155; padding: 16px; border-radius: 8px; white-space: pre-wrap; font-weight: 400; }
    .footer { padding: 20px 32px; background: #0B0D13; border-top: 1px solid #272B38; font-size: 12px; color: #64748B; text-align: center; }
    .cta-btn { display: inline-block; background: #D97706; color: #FFFFFF !important; text-decoration: none; font-weight: 700; font-size: 14px; padding: 12px 24px; border-radius: 6px; margin-top: 12px; box-shadow: 0 4px 14px rgba(217,119,6,0.4); }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <h1>🚀 Nairi Ventures - New Inquiry Alert</h1>
      <p>A new potential venture client just submitted details on the Nairi Ventures portal.</p>
      <div class="badge">Dispatched to 2 Designated Inboxes: ${recipients.join(' & ')}</div>
    </div>
    <div class="content">
      <div class="field-row">
        <div class="field-label">Client / Inquirer Name</div>
        <div class="field-val"><strong>${clientName}</strong></div>
      </div>
      <div class="field-row">
        <div class="field-label">Email Address</div>
        <div class="field-val"><a href="mailto:${clientEmail}">${clientEmail}</a></div>
      </div>
      <div class="field-row">
        <div class="field-label">Tier / Focus Area</div>
        <div class="field-val">${clientVenture}</div>
      </div>
      <div class="field-row">
        <div class="field-label">Inquiry Message / Details</div>
        <div class="field-box message-box">${clientMessage}</div>
      </div>
      <div class="field-row">
        <div class="field-label">Submission Timestamp</div>
        <div class="field-val">${clientTime}</div>
      </div>
      <div class="field-row">
        <div class="field-label">Lead Reference ID</div>
        <div class="field-val"><code style="color: #F59E0B; font-family: monospace;">${lead.id || 'N/A'}</code></div>
      </div>
      <div style="text-align: center; margin-top: 28px; padding-top: 16px; border-top: 1px solid #272B38;">
        <a href="${adminLink}" class="cta-btn" target="_blank">Open Inquiries in Admin Panel &rarr;</a>
      </div>
    </div>
    <div class="footer">
      🔒 Confidential Lead Alert &middot; Nairi Ventures Management Dashboard<br>
      This notification is sent strictly to designated administrative inboxes.
    </div>
  </div>
</body>
</html>
  `.trim();

  const textContent = `
NEW INQUIRY NOTIFICATION - NAIRI VENTURES
===========================================
Client Name: ${clientName}
Client Email: ${clientEmail}
Interest / Budget: ${clientVenture}
Date & Time: ${clientTime}
Lead ID: ${lead.id || 'N/A'}

Inquiry Message:
${clientMessage}

Dispatched to Designated Inboxes:
${recipients.join(', ')}

Review in Admin Panel:
${adminLink}
===========================================
  `.trim();

  let sendResult = { ok: true, status: 'DISPATCHED_TO_OUTBOX' };

  if (nodemailer && settings.smtp_user && settings.smtp_pass) {
    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: settings.smtp_user,
          pass: settings.smtp_pass
        }
      });

      const info = await transporter.sendMail({
        from: `"${settings.sender_name || 'Nairi Ventures Alerts'}" <${settings.smtp_user}>`,
        to: recipients,
        subject: subject,
        text: textContent,
        html: htmlContent
      });

      console.log(`[EMAIL ALERTS] Dispatched via Google SMTP to ${recipients.join(', ')}. MessageId: ${info.messageId}`);
      sendResult = { ok: true, status: 'DELIVERED_VIA_GMAIL_SMTP', messageId: info.messageId };
    } catch (err) {
      console.error('[EMAIL ALERTS] SMTP send failed:', err.message);
      sendResult = { ok: false, status: 'SMTP_ERROR', error: err.message };
    }
  } else {
    console.log(`[EMAIL ALERTS] Alert queued in Admin Outbox for ${recipients.join(' & ')} (Configure Gmail App Password in Admin Panel for direct SMTP delivery)`);
    sendResult = { ok: true, status: 'DISPATCHED_TO_OUTBOX', note: `Dispatched to outbox for ${recipients.join(' & ')}.` };
  }

  const logEntry = {
    id: 'email-log-' + Date.now(),
    timestamp: new Date().toISOString(),
    lead_id: lead.id || 'N/A',
    lead_name: clientName,
    lead_email: clientEmail,
    recipients: recipients,
    subject: subject,
    status: sendResult.status,
    preview: clientMessage.length > 80 ? clientMessage.slice(0, 80) + '...' : clientMessage,
    html: htmlContent
  };
  logEmailAlert(logEntry);

  return { ...sendResult, log: logEntry };
}

const server = http.createServer((req, res) => {
  const parsedUrl = new URL(req.url, `http://localhost:${PORT}`);
  const pathname = decodeURIComponent(parsedUrl.pathname);

  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  // --- API: Get Full CMS Data ---
  if (req.method === 'GET' && pathname === '/api/cms-data') {
    try {
      const data = readCMSData();
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(data));
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: err.message }));
    }
    return;
  }

  // --- API: Save Content Part ---
  if (req.method === 'POST' && pathname === '/api/save-content') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      try {
        const item = JSON.parse(body);
        const data = readCMSData();
        if (!data.page_content) data.page_content = [];
        const idx = data.page_content.findIndex(p => p.id === item.id || p.section_key === item.section_key);
        if (idx >= 0) {
          data.page_content[idx] = { ...data.page_content[idx], ...item };
        } else {
          data.page_content.push(item);
        }
        writeCMSData(data);

        // Physically update the HTML file on disk
        if (item.page && item.section_key) {
          updateHtmlFileContent(item.page, item.section_key, item.content || '', !!item.is_deleted);
        }

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ ok: true, item }));
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ ok: false, error: err.message }));
      }
    });
    return;
  }

  // --- API: Save Image ---
  if (req.method === 'POST' && pathname === '/api/save-image') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      try {
        const img = JSON.parse(body);
        const data = readCMSData();
        if (!data.images) data.images = [];
        const idx = data.images.findIndex(i => i.id === img.id || i.element_key === img.element_key);
        if (idx >= 0) {
          data.images[idx] = { ...data.images[idx], ...img };
        } else {
          data.images.push(img);
        }

        // Sync branding logo_image if header logo was changed in images tab
        if (img.element_key === 'brand.header_logo' && img.url) {
          data.branding = { ...(data.branding || {}), logo_image: img.url };
        }
        writeCMSData(data);

        // Update target HTML on disk
        if (img.page && img.element_key && img.url) {
          updateHtmlImage(img.page, img.element_key, img.url, img.alt);
        }

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ ok: true, image: img }));
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ ok: false, error: err.message }));
      }
    });
    return;
  }

  // --- API: Save Branding (Logo & Fonts) ---
  if (req.method === 'POST' && pathname === '/api/save-branding') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      try {
        const branding = JSON.parse(body);
        const data = readCMSData();
        data.branding = { ...(data.branding || {}), ...branding };

        // Sync to images collection if logo_image changed in branding bar
        if (branding.logo_image) {
          if (!data.images) data.images = [];
          const headerIdx = data.images.findIndex(i => i.element_key === 'brand.header_logo');
          if (headerIdx >= 0) {
            data.images[headerIdx].url = branding.logo_image;
          }
        }

        writeCMSData(data);

        // Update HTML logo text and image across pages
        if (branding.logo_text !== undefined || branding.logo_image !== undefined) {
          updateHtmlLogo(branding.logo_text, branding.logo_image);
        }
        // Update granular typography and CSS fonts across all pages
        if (branding.font_heading || branding.font_subheading || branding.font_body || branding.font_mono || branding.font_serif || branding.font_sans || branding.accent_color) {
          updateDiskTypography(data.branding);
        }

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ ok: true, branding: data.branding }));
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ ok: false, error: err.message }));
      }
    });
    return;
  }

  // --- API: Upload Image (Base64) ---
  if (req.method === 'POST' && pathname === '/api/upload-image') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      try {
        const { filename, base64Data } = JSON.parse(body);
        if (!filename || !base64Data) throw new Error('Missing filename or base64Data');

        const cleanBase64 = base64Data.replace(/^data:image\/\w+;base64,/, '');
        const buffer = Buffer.from(cleanBase64, 'base64');
        const safeName = filename.replace(/[^a-zA-Z0-9_.-]/g, '_');
        const targetPath = path.join(ROOT, 'images', safeName);

        fs.writeFileSync(targetPath, buffer);
        console.log(`[UPLOAD] Saved new image to images/${safeName}`);

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ ok: true, url: `images/${safeName}`, filename: safeName }));
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ ok: false, error: err.message }));
      }
    });
    return;
  }

  // --- API: List Images in images/ Directory ---
  if (req.method === 'GET' && pathname === '/api/list-images') {
    try {
      const imgDir = path.join(ROOT, 'images');
      let files = [];
      if (fs.existsSync(imgDir)) {
        files = fs.readdirSync(imgDir).filter(f => /\.(jpg|jpeg|png|svg|webp|ico)$/i.test(f)).map(f => {
          const stat = fs.statSync(path.join(imgDir, f));
          return { filename: f, url: `images/${f}`, size: stat.size };
        });
      }
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ ok: true, images: files }));
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ ok: false, error: err.message }));
    }
    return;
  }

  // --- API: Save Lead & Automatically Forward to 2 Gmails ---
  if (req.method === 'POST' && (pathname === '/api/save-lead' || pathname === '/api/leads')) {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', async () => {
      try {
        const lead = JSON.parse(body);
        if (!lead.id) lead.id = 'l-' + Date.now();
        if (!lead.created_at) lead.created_at = new Date().toISOString();
        if (!lead.status) lead.status = 'New';
        lead.name = lead.name || lead.fullName || 'Anonymous Visitor';
        lead.venture_interest = lead.venture_interest || lead.tier || 'General Inquiry';

        const data = readCMSData();
        if (!data.leads) data.leads = [];
        const idx = data.leads.findIndex(l => l.id === lead.id);
        if (idx >= 0) {
          data.leads[idx] = { ...data.leads[idx], ...lead };
        } else {
          data.leads.unshift(lead);
        }
        writeCMSData(data);
        console.log(`[LEAD SAVED] Captured lead for ${lead.name} (${lead.email})`);

        // Automatically dispatch email alert to the 2 configured Gmail addresses
        let emailDispatch = null;
        try {
          const reqProto = req.headers['x-forwarded-proto'] || (req.socket.encrypted ? 'https' : 'http');
          const reqHost = req.headers['x-forwarded-host'] || req.headers.host || `localhost:${PORT}`;
          const reqOrigin = `${reqProto}://${reqHost}`;
          emailDispatch = await sendLeadAlertEmails(lead, reqOrigin);
        } catch (mailErr) {
          console.error('[LEAD EMAIL DISPATCH ERROR]:', mailErr.message);
        }

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ ok: true, lead, emailDispatch }));
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ ok: false, error: err.message }));
      }
    });
    return;
  }

  // --- API: Get Leads ---
  if (req.method === 'GET' && pathname === '/api/leads') {
    try {
      const data = readCMSData();
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(data.leads || []));
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ ok: false, error: err.message }));
    }
    return;
  }

  // --- API: Get Lead Email Alert Settings & Outbox Logs ---
  if (req.method === 'GET' && pathname === '/api/lead-email-settings') {
    try {
      const settings = getEmailAlertSettings();
      const data = readCMSData();
      const safeSettings = {
        enabled: settings.enabled !== false,
        gmail_1: settings.gmail_1 || '',
        gmail_2: settings.gmail_2 || '',
        sender_name: settings.sender_name || 'Nairi Ventures Leads',
        smtp_user: settings.smtp_user || '',
        has_smtp_pass: !!settings.smtp_pass,
        last_updated: settings.last_updated || new Date().toISOString(),
        logs: (data.email_alert_logs || []).slice(0, 50)
      };
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ ok: true, settings: safeSettings }));
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ ok: false, error: err.message }));
    }
    return;
  }

  // --- API: Save Lead Email Alert Settings ---
  if (req.method === 'POST' && pathname === '/api/save-lead-email-settings') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      try {
        const payload = JSON.parse(body);
        const updated = saveEmailAlertSettings(payload);
        const data = readCMSData();
        const safeSettings = {
          enabled: updated.enabled !== false,
          gmail_1: updated.gmail_1 || '',
          gmail_2: updated.gmail_2 || '',
          sender_name: updated.sender_name || 'Nairi Ventures Leads',
          smtp_user: updated.smtp_user || '',
          has_smtp_pass: !!updated.smtp_pass,
          last_updated: updated.last_updated,
          logs: (data.email_alert_logs || []).slice(0, 50)
        };
        console.log(`[EMAIL SETTINGS SAVED] Configured recipients: ${safeSettings.gmail_1} & ${safeSettings.gmail_2}`);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ ok: true, settings: safeSettings, message: 'Email notification settings successfully updated.' }));
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ ok: false, error: err.message }));
      }
    });
    return;
  }

  // --- API: Send Test Lead Notification Email ---
  if (req.method === 'POST' && pathname === '/api/test-lead-email') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', async () => {
      try {
        let testData = {};
        try { if (body) testData = JSON.parse(body); } catch (e) {}

        const sampleLead = {
          id: 'test-lead-' + Math.floor(1000 + Math.random() * 9000),
          name: testData.name || 'Elena Rostova (SwipeTouch Interactive)',
          email: testData.email || 'elena@swipetouch.co',
          venture_interest: testData.venture_interest || '$5k-$10k (Production Sprint)',
          message: testData.message || '[Website/URL: https://swipetouch.co]\nOur conversion drop-off on paid mobile traffic is currently at 72%. Testing automated forwarding to both designated Gmail inboxes.',
          created_at: new Date().toISOString(),
          status: 'Test Verified'
        };

        const reqProto = req.headers['x-forwarded-proto'] || (req.socket.encrypted ? 'https' : 'http');
        const reqHost = req.headers['x-forwarded-host'] || req.headers.host || `localhost:${PORT}`;
        const reqOrigin = `${reqProto}://${reqHost}`;
        const dispatchResult = await sendLeadAlertEmails(sampleLead, reqOrigin);
        const data = readCMSData();

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
          ok: true,
          dispatchResult,
          sampleLead,
          logs: (data.email_alert_logs || []).slice(0, 50)
        }));
      } catch (err) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ ok: false, error: err.message }));
      }
    });
    return;
  }

  // --- API: Save Venture ---
  if (req.method === 'POST' && pathname === '/api/save-venture') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      try {
        const v = JSON.parse(body);
        const data = readCMSData();
        const idx = data.ventures.findIndex(item => item.id === v.id);
        if (idx >= 0) {
          data.ventures[idx] = { ...data.ventures[idx], ...v };
        } else {
          v.id = v.id || 'v-' + Date.now();
          data.ventures.push(v);
        }
        writeCMSData(data);

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ ok: true, venture: v }));
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ ok: false, error: err.message }));
      }
    });
    return;
  }

  // --- API: Delete Venture ---
  if (req.method === 'POST' && pathname === '/api/delete-venture') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      try {
        const { id } = JSON.parse(body);
        const data = readCMSData();
        data.ventures = (data.ventures || []).filter(v => v.id !== id);
        writeCMSData(data);

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ ok: true, id }));
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ ok: false, error: err.message }));
      }
    });
    return;
  }

  // --- API: Save Video ---
  if (req.method === 'POST' && pathname === '/api/save-video') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      try {
        const vid = JSON.parse(body);
        const data = readCMSData();
        if (!data.videos) data.videos = [];
        const idx = data.videos.findIndex(v => v.id === vid.id);
        if (idx >= 0) {
          data.videos[idx] = { ...data.videos[idx], ...vid };
        } else {
          vid.id = vid.id || 'vid-' + Date.now();
          data.videos.push(vid);
        }
        writeCMSData(data);

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ ok: true, video: vid }));
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ ok: false, error: err.message }));
      }
    });
    return;
  }

  // --- API: Delete Video ---
  if (req.method === 'POST' && pathname === '/api/delete-video') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      try {
        const { id } = JSON.parse(body);
        const data = readCMSData();
        data.videos = (data.videos || []).filter(v => v.id !== id);
        writeCMSData(data);

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ ok: true, id }));
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ ok: false, error: err.message }));
      }
    });
    return;
  }

  // --- API: Save Testimonial ---
  if (req.method === 'POST' && pathname === '/api/save-testimonial') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      try {
        const t = JSON.parse(body);
        const data = readCMSData();
        if (!data.testimonials) data.testimonials = [];
        const idx = data.testimonials.findIndex(item => item.id === t.id);
        if (idx >= 0) {
          data.testimonials[idx] = { ...data.testimonials[idx], ...t };
        } else {
          t.id = t.id || 't-' + Date.now();
          t.created_at = new Date().toISOString();
          data.testimonials.unshift(t);
        }
        writeCMSData(data);

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ ok: true, testimonial: t }));
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ ok: false, error: err.message }));
      }
    });
    return;
  }

  // --- API: Delete Testimonial ---
  if (req.method === 'POST' && pathname === '/api/delete-testimonial') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      try {
        const { id } = JSON.parse(body);
        const data = readCMSData();
        data.testimonials = (data.testimonials || []).filter(t => t.id !== id);
        writeCMSData(data);

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ ok: true, id }));
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ ok: false, error: err.message }));
      }
    });
    return;
  }

  // --- Static Files Serving ---
  let reqUrl = pathname;
  if (reqUrl === '/' || reqUrl === '') {
    reqUrl = '/index.html';
  }

  let safePath = path.normalize(reqUrl).replace(/^(\.\.[\/\\])+/, '');
  let filePath = path.join(ROOT, safePath);

  try {
    if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
      filePath = path.join(filePath, 'index.html');
    }
  } catch (e) {}

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end('<h1>404 Not Found</h1><p>The requested file does not exist.</p>');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    const fileSize = stats.size;
    const range = req.headers.range;

    if (range && (ext === '.mp4' || ext === '.webm' || ext === '.ogg')) {
      const parts = range.replace(/bytes=/, "").split("-");
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
      const chunksize = (end - start) + 1;
      res.writeHead(206, {
        'Content-Range': `bytes ${start}-${end}/${fileSize}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunksize,
        'Content-Type': contentType,
      });
      const stream = fs.createReadStream(filePath, { start, end });
      stream.pipe(res);
      return;
    }

    res.writeHead(200, {
      'Content-Type': contentType,
      'Content-Length': fileSize,
      'Accept-Ranges': 'bytes',
      'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0',
      'Pragma': 'no-cache',
      'Expires': '0'
    });

    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Nairi Ventures live server active at http://localhost:${PORT}/ and http://127.0.0.1:${PORT}/`);
});
