const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('[data-nav-links]');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const faqItems = document.querySelectorAll('.faq-list details');
faqItems.forEach((item) => {
  item.addEventListener('toggle', () => {
    if (!item.open) return;
    faqItems.forEach((other) => {
      if (other !== item) other.open = false;
    });
  });
});

const leadForm = document.getElementById('leadForm');
if (leadForm) {
  leadForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = new FormData(leadForm);
    const message = `Assalamualaikum Ustaz Aqil, saya ingin mohon Sesi Tahsin Percuma AQHBAR Academy.%0A%0A` +
      `Nama: ${encodeURIComponent(data.get('nama') || '')}%0A` +
      `Umur: ${encodeURIComponent(data.get('umur') || '')}%0A` +
      `Negeri: ${encodeURIComponent(data.get('negeri') || '')}%0A` +
      `Pekerjaan: ${encodeURIComponent(data.get('pekerjaan') || '')}%0A` +
      `Tahap bacaan: ${encodeURIComponent(data.get('tahap') || '')}%0A` +
      `Objective: ${encodeURIComponent(data.get('objective') || '')}%0A` +
      `No telefon: ${encodeURIComponent(data.get('telefon') || '')}%0A` +
      `Email: ${encodeURIComponent(data.get('email') || '')}`;

    window.open(`https://wa.me/60179251799?text=${message}`, '_blank', 'noopener');
  });
}
