const navToggle = document.querySelector('[data-nav-toggle]');
const navLinks = document.querySelector('[data-nav-links]');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
    document.body.classList.toggle('nav-open', isOpen);
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('nav-open');
    });
  });
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const leadForm = document.querySelector('[data-lead-form]');
const whatsappNumber = '60179251799';

if (leadForm) {
  leadForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(leadForm);
    const lines = [
      'Assalamualaikum Ustaz Aqil, saya nak mohon Sesi Tahsin Percuma AQHBAR.',
      '',
      `Nama: ${data.get('nama') || '-'}`,
      `Umur: ${data.get('umur') || '-'}`,
      `Negeri: ${data.get('negeri') || '-'}`,
      `Pekerjaan: ${data.get('pekerjaan') || '-'}`,
      `Tahap bacaan: ${data.get('tahap') || '-'}`,
      `Objective: ${data.get('objektif') || '-'}`,
      `No telefon: ${data.get('telefon') || '-'}`,
      `Email: ${data.get('email') || '-'}`,
      '',
      'Mohon team AQHBAR hubungi saya untuk consultation.'
    ];

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(lines.join('\n'))}`;
    window.open(url, '_blank', 'noopener');
  });
}

const faqItems = document.querySelectorAll('.faq-list details');
faqItems.forEach((item) => {
  item.addEventListener('toggle', () => {
    if (!item.open) return;
    faqItems.forEach((other) => {
      if (other !== item) other.open = false;
    });
  });
});
