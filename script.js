'use strict';
const config = window.siteConfig || {};
const fields = { name: 'name', initials: 'initials', kicker: 'kicker', intro: 'intro', bio: 'bio', 'about-detail': 'aboutDetail' };
for (const [attribute, key] of Object.entries(fields)) {
  if (typeof config[key] === 'string' && config[key].trim()) {
    document.querySelectorAll(`[data-${attribute}]`).forEach(element => { element.textContent = config[key]; });
  }
}
if (config.title) document.title = config.title;
if (config.description) document.querySelector('meta[name="description"]').content = config.description;
document.querySelector('[data-year]').textContent = new Date().getFullYear();
if (typeof config.email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(config.email)) {
  const email = document.querySelector('[data-email]');
  email.href = `mailto:${config.email}`;
  email.hidden = false;
  document.querySelector('[data-contact-placeholder]').hidden = true;
  const contactEmail = document.querySelector('[data-contact-email]');
  contactEmail.href = email.href;
  contactEmail.textContent = config.email;
  contactEmail.hidden = false;
}
for (const key of ['github', 'linkedin', 'cv']) {
  const value = config[key];
  if (typeof value !== 'string' || !value.trim()) continue;
  try {
    const url = new URL(value, window.location.href);
    if (!['http:', 'https:'].includes(url.protocol)) continue;
    const link = document.querySelector(`[data-${key}]`);
    link.href = url.href;
    link.hidden = false;
    if (key === 'cv') document.querySelector('[data-cv-placeholder]').hidden = true;
  } catch { /* An invalid optional link stays hidden. */ }
}
