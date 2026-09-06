import './styles/index.scss';

// The address is assembled only when someone clicks, so it never appears in
// the static HTML that scrapers harvest. First click reveals it, second opens
// the mail client.
function revealEmailLinks() {
  for (const link of document.querySelectorAll('.js-email')) {
    link.addEventListener('click', (event) => {
      if (link.getAttribute('href').startsWith('mailto:')) return;
      event.preventDefault();
      const address = `${link.dataset.user}@${link.dataset.domain}`;
      link.setAttribute('href', `mailto:${address}`);
      link.textContent = address;
    });
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', revealEmailLinks);
} else {
  revealEmailLinks();
}
