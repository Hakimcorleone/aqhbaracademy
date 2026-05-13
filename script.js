const whatsappNumber = '60179251799';

const leadForm = document.getElementById('leadForm');

if (leadForm) {
  leadForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const data = {
      nama: document.getElementById('nama').value,
      telefon: document.getElementById('telefon').value,
      email: document.getElementById('email').value,
      tahap: document.getElementById('tahap').value,
      warna: document.getElementById('warna').value,
      tutor: document.getElementById('tutor').value,
      kelas: document.getElementById('kelas').value,
      harapan: document.getElementById('harapan').value,
    };

    const message = `Assalamualaikum AQHBAR Academy. Saya nak daftar kelas.\n\nNama: ${data.nama}\nNo Telefon: ${data.telefon}\nEmail: ${data.email}\nTahap Bacaan: ${data.tahap}\nWarna Kegemaran: ${data.warna}\nPilihan Tutor: ${data.tutor}\nKelas Pilihan: ${data.kelas}\nHarapan/Cita-cita: ${data.harapan}`;

    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  });
}

const tutorButton = document.getElementById('tutorButton');

if (tutorButton) {
  tutorButton.addEventListener('click', function (event) {
    event.preventDefault();
    const message = 'Assalamualaikum AQHBAR Academy. Saya nak daftar sebagai tutor/pengajar.';
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  });
}
