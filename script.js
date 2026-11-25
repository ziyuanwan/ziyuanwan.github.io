'use strict';
const config = window.siteConfig || {};
const page = document.body.dataset.page;
const name = config.name || 'Ziyuan Wan';
document.querySelectorAll('[data-name]').forEach(element => { element.textContent = name; });
document.title = (page === 'Home' ? '' : `${page} | `) + (config.title || name);
if (config.description) document.querySelector('meta[name="description"]').content = config.description;
const bio = document.querySelector('[data-bio]');
if (bio && config.bio) {
  bio.replaceChildren();
  config.bio.split(/\n\s*\n|(?=My main field of research)/).filter(Boolean).forEach(text => {
    const paragraph = document.createElement('p');
    paragraph.textContent = text.trim();
    bio.append(paragraph);
  });
}
const detail = document.querySelector('[data-about-detail]');
if (detail && config.aboutDetail) {
  detail.textContent = config.aboutDetail;
  detail.hidden = false;
}
function safeUrl(value) {
  if (typeof value !== 'string' || !value.trim()) return null;
  try {
    const url = new URL(value, window.location.href);
    return ['http:', 'https:', 'file:'].includes(url.protocol) ? url.href : null;
  } catch { return null; }
}
document.querySelectorAll('[data-email]').forEach(link => {
  link.hidden = !config.email;
  if (config.email) {
    link.href = `mailto:${config.email}`;
    link.textContent = config.email;
  }
});
for (const key of ['github', 'linkedin', 'cv']) {
  const url = safeUrl(config[key]);
  document.querySelectorAll(`[data-${key}]`).forEach(link => {
    link.hidden = !url;
    if (url) link.href = url;
  });
  if (key === 'cv' && url) document.querySelectorAll('[data-cv-placeholder]').forEach(item => { item.hidden = true; });
}
const photo = safeUrl(config.photo);
if (photo) document.querySelectorAll('[data-photo]').forEach(img => {
  img.src = photo;
  img.alt = config.photoAlt || `Portrait of ${name}`;
});
// Preserve links to sections from the previous one-page website.
if (page === 'Home') {
  const destinations = { '#research': 'research.html', '#teaching': 'teaching.html', '#cv': 'cv.html', '#personal': 'personal.html' };
  if (destinations[location.hash]) location.replace(destinations[location.hash]);
}
