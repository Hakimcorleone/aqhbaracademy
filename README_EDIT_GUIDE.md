# AQHBAR Academy — Panduan Edit Website

Dokumen ini explain bahagian mana perlu edit kalau nak tukar wording, button, product card, form, page Tadabbur, WhatsApp, warna, dan layout asas.

> Nota penting: line number di bawah ikut file versi sekarang. Kalau anda tambah atau buang line, nombor line mungkin berubah. Jadi cara paling selamat ialah guna `Ctrl + F` dan search keyword yang saya bagi.

---

## 1. Struktur file website

Website ini guna static file biasa:

| File | Fungsi |
|---|---|
| `index.html` | Homepage utama: hero, product card, form, FAQ, button tutor |
| `tadabbur.html` | Sales page khas untuk Product 2: Kelas Tadabbur Bulanan |
| `styles.css` | Design website: warna, spacing, button, card, responsive layout |
| `script.js` | Logic WhatsApp untuk form dan button daftar tutor/pengajar |

---

## 2. Cara edit di GitHub

1. Buka repo GitHub.
2. Klik file yang nak edit, contoh `index.html`.
3. Klik ikon pensel **Edit this file**.
4. Guna `Ctrl + F` untuk cari keyword.
5. Tukar text atau code yang perlu sahaja.
6. Scroll bawah dan klik **Commit changes**.
7. Tunggu Vercel auto deploy.

---

# A. Edit Homepage — `index.html`

## A1. Tukar title website/browser tab

**File:** `index.html`  
**Line:** 6

```html
<title>AQHBAR Academy | Daftar Kelas</title>
```

Tukar text dalam `<title>` sahaja.

Contoh:

```html
<title>AQHBAR Academy</title>
```

---

## A2. Tukar logo/nama brand di header

**File:** `index.html`  
**Line:** 11

```html
<a class="brand" href="#home"><span>A</span> AQHBAR Academy</a>
```

Bahagian `<span>A</span>` ialah huruf dalam bulatan logo.  
Bahagian `AQHBAR Academy` ialah nama brand.

Kalau nak tukar huruf logo:

```html
<span>Q</span>
```

Kalau nak tukar nama brand:

```html
AQHBAR Academy
```

---

## A3. Tukar menu navigation atas

**File:** `index.html`  
**Line:** 13–16

```html
<a href="#program">Program</a>
<a href="#form">Daftar</a>
<a href="tadabbur.html">Tadabbur</a>
<a href="#faq">FAQ</a>
```

Tukar text antara tag `<a>...</a>` sahaja kalau nak ubah nama menu.

Contoh tukar `Program` jadi `Kelas`:

```html
<a href="#program">Kelas</a>
```

Jangan tukar `href` kalau tak pasti, sebab `href` menentukan link pergi ke section mana.

---

## A4. Tukar hero headline utama

**File:** `index.html`  
**Line:** 23–25

```html
<p class="eyebrow">Struktur ayat santai</p>
<h1>Nak mula belajar Quran tapi tak tahu nak mula dari mana?</h1>
<p>AQHBAR Academy bantu anda pilih kelas yang sesuai ikut tahap bacaan dan kesesuaian anda.</p>
```

Yang boleh tukar:

- Text kecil atas headline: line 23
- Headline besar: line 24
- Ayat penerangan bawah headline: line 25

Kalau nak kekalkan ikut nota, jangan tambah ayat baru yang tiada dalam nota.

---

## A5. Tukar button hero

**File:** `index.html`  
**Line:** 27–28

```html
<a class="btn primary" href="#form">Wasap Sekarang</a>
<a class="btn secondary" href="#program">Lihat Kelas</a>
```

Button pertama pergi ke form sebab `href="#form"`.  
Button kedua pergi ke product section sebab `href="#program"`.

Kalau nak tukar wording button, tukar text sahaja.

Contoh:

```html
<a class="btn primary" href="#form">Daftar Sekarang</a>
```

---

## A6. Tukar text bawah button WhatsApp/interview

**File:** `index.html`  
**Line:** 30

```html
<p class="button-note">akan diadakan sesi interview khusus untuk tentukan bacaan anda</p>
```

Ini text kecil bawah button. Tukar ayat dalam `<p>` sahaja.

Text yang sama juga ada di:

- `index.html` line 176 — bawah button form
- `tadabbur.html` line 27 — bawah button hero Tadabbur
- `tadabbur.html` line 72 — bawah button CTA Tadabbur

---

## A7. Tukar card kanan hero

**File:** `index.html`  
**Line:** 33–35

```html
<p class="card-kicker">Tahsin Bacaan Surah Al-Fatihah</p>
<h2>Betulkan bacaan Al-Fatihah anda dahulu.</h2>
<p>Mulakan dengan sesi semakan supaya team AQHBAR boleh tentukan kelas yang sesuai untuk anda.</p>
```

Bahagian ini untuk highlight Tahsin Bacaan Surah Al-Fatihah.

---

## A8. Tukar section “Apa yang AQHBAR bantu”

**File:** `index.html`  
**Line:** 40–50

```html
<p class="eyebrow">Apa yang AQHBAR bantu</p>
<h2>Belajar secara santai ikut tahap anda.</h2>
<div class="pill-grid">
  <span>Tahsin Bacaan Surah Al-Fatihah</span>
  <span>Bacaan dalam solat</span>
  <span>Kelas mengaji</span>
  <span>Hafazan surah pilihan</span>
  <span>Hadith pilihan</span>
  <span>Sirah Nabi</span>
  <span>Fardu Ain</span>
  <span>Kelas custom</span>
</div>
```

Setiap `<span>...</span>` ialah satu pill/tag.

Kalau nak tambah tag baru:

```html
<span>Ayat baru</span>
```

Kalau ikut arahan asal, jangan tambah benda luar daripada nota.

---

# B. Edit Product Card — `index.html`

Semua product card berada dalam `index.html` line 58–104.

## B1. Product 1 — Sesi Percuma

**File:** `index.html`  
**Line:** 58–64

```html
<article class="product-card highlight">
  <span class="product-number">01</span>
  <h3>Daftar Kelas Sesi Percuma</h3>
  <p class="free-tag">Percuma — Betulkan bacaan Al-Fatihah</p>
  <p>Booking sesi percuma untuk semak dan betulkan bacaan Al-Fatihah.</p>
  <a class="btn small" href="#form">Daftar Kelas Sesi Percuma</a>
</article>
```

Yang biasa tukar:

- Tajuk card: line 60
- Highlight percuma: line 61
- Description: line 62
- Text button: line 63

`href="#form"` maksudnya button pergi ke form.

---

## B2. Product 2 — Tadabbur Bulanan

**File:** `index.html`  
**Line:** 66–71

```html
<article class="product-card">
  <span class="product-number">02</span>
  <h3>Daftar Kelas Tadabbur Bulanan</h3>
  <p>Percuma satu sesi 45 minit untuk Tahsin Al-Fatihah dan bacaan dalam solat.</p>
  <a class="btn small" href="tadabbur.html">Daftar Kelas Tadabbur Bulanan</a>
</article>
```

Button ini pergi ke page khas Tadabbur sebab:

```html
href="tadabbur.html"
```

Kalau nak button terus pergi form, tukar jadi:

```html
href="#form"
```

Tapi ikut nota, Product 2 perlu sales page khas, jadi biarkan `href="tadabbur.html"`.

---

## B3. Product 3 — Kelas Mengaji

**File:** `index.html`  
**Line:** 73–83

```html
<article class="product-card">
  <span class="product-number">03</span>
  <h3>Daftar Kelas Mengaji</h3>
  <p>Termasuk sesi hafazan. Ada option berkumpulan dan individu.</p>
  <ul>
    <li>Hafazan surah pilihan</li>
    <li>Hadith pilihan</li>
    <li>Sirah Nabi</li>
  </ul>
  <a class="btn small" href="#form">Daftar Kelas Mengaji</a>
</article>
```

Untuk tambah/buang bullet, edit bahagian `<li>...</li>` line 78–80.

---

## B4. Product 4 — Fardu Ain

**File:** `index.html`  
**Line:** 85–90

```html
<article class="product-card">
  <span class="product-number">04</span>
  <h3>Daftar Kelas Fardu Ain</h3>
  <p>Belajar mengenai Fardu Ain mengikut kesesuaian anda.</p>
  <a class="btn small" href="#form">Daftar Kelas Fardu Ain</a>
</article>
```

---

## B5. Product 5 — Combo

**File:** `index.html`  
**Line:** 92–97

```html
<article class="product-card">
  <span class="product-number">05</span>
  <h3>Daftar Kelas Combo</h3>
  <p>Kelas Mengaji + Fardu Ain dalam satu pilihan kelas.</p>
  <a class="btn small" href="#form">Daftar Kelas Combo</a>
</article>
```

---

## B6. Product 6 — Custom

**File:** `index.html`  
**Line:** 99–104

```html
<article class="product-card">
  <span class="product-number">06</span>
  <h3>Daftar Kelas Custom Ikut Kesesuaian Anda</h3>
  <p>Corporate class dan sesi private berkumpulan mengikut kesesuaian anda.</p>
  <a class="btn small" href="#form">Daftar Kelas Custom</a>
</article>
```

---

# C. Edit Form — `index.html`

Form bermula dari line 108 sampai 177.

## C1. Tukar tajuk form

**File:** `index.html`  
**Line:** 110–112

```html
<p class="eyebrow">Form pendaftaran</p>
<h2>Daftar Kelas AQHBAR</h2>
<p>Isi detail di bawah. Maklumat ini akan dibuka ke WhatsApp AQHBAR.</p>
```

Tukar text dalam tag sahaja.

---

## C2. Edit field nama, telefon, email

**File:** `index.html`  
**Line:** 116–124

```html
<label>Nama penuh
  <input type="text" id="nama" name="nama" required />
</label>
<label>No telefon
  <input type="tel" id="telefon" name="telefon" required />
</label>
<label>Email
  <input type="email" id="email" name="email" required />
</label>
```

Penting: jangan tukar `id="nama"`, `id="telefon"`, atau `id="email"` kecuali anda juga update `script.js`.

`script.js` baca field ikut ID ini:

- `nama`
- `telefon`
- `email`

Kalau ID ditukar tapi `script.js` tak ditukar, WhatsApp message boleh rosak.

---

## C3. Edit pilihan tahap bacaan

**File:** `index.html`  
**Line:** 126–135

```html
<label>Tahap bacaan
  <select id="tahap" name="tahap" required>
    <option value="">Pilih tahap bacaan</option>
    <option>Belum boleh baca</option>
    <option>Pernah</option>
    <option>Boleh Tapi Tak Lancar</option>
    <option>Nak Baiki Tajwid & Makhraj Huruf</option>
    <option>Nak Khatam Bersama ustaz/Ustazah</option>
  </select>
</label>
```

Tambah option baru dengan format:

```html
<option>Text pilihan baru</option>
```

Jangan tukar `id="tahap"` kecuali update `script.js` line 13.

---

## C4. Edit pilihan warna kegemaran

**File:** `index.html`  
**Line:** 137–147

```html
<label>Warna kegemaran
  <select id="warna" name="warna" required>
    <option value="">Pilih warna</option>
    <option>Biru</option>
    <option>Hijau</option>
    <option>Merah</option>
    <option>Kuning</option>
    <option>Putih</option>
    <option>Hitam</option>
  </select>
</label>
```

Untuk tambah warna:

```html
<option>Ungu</option>
```

Jangan tukar `id="warna"` kecuali update `script.js` line 14.

---

## C5. Edit pilihan tutor

**File:** `index.html`  
**Line:** 149–157

```html
<label>Pilihan Tutor
  <select id="tutor" name="tutor" required>
    <option value="">Pilih tutor</option>
    <option>Ustaz/Ustazah 1</option>
    <option>Ustaz/Ustazah 2</option>
    <option>Ustaz/Ustazah 3</option>
    <option>Ikut cadangan AQHBAR</option>
  </select>
</label>
```

Untuk letak nama sebenar, tukar text placeholder.

Contoh:

```html
<option>Ustaz Ahmad</option>
```

Jangan tukar `id="tutor"` kecuali update `script.js` line 15.

---

## C6. Edit pilihan kelas/product dalam form

**File:** `index.html`  
**Line:** 159–169

```html
<label>Kelas pilihan
  <select id="kelas" name="kelas" required>
    <option value="">Pilih kelas</option>
    <option>Daftar Kelas Sesi Percuma</option>
    <option>Daftar Kelas Tadabbur Bulanan</option>
    <option>Daftar Kelas Mengaji</option>
    <option>Daftar Kelas Fardu Ain</option>
    <option>Daftar Kelas Combo</option>
    <option>Daftar Kelas Custom Ikut Kesesuaian Anda</option>
  </select>
</label>
```

Kalau tukar nama product card, update sekali option di sini supaya selari.

Jangan tukar `id="kelas"` kecuali update `script.js` line 16.

---

## C7. Edit soalan harapan/cita-cita

**File:** `index.html`  
**Line:** 171–173

```html
<label class="full">Harapan dan cita-cita daftar kelas AQHBAR
  <textarea id="harapan" name="harapan" rows="5" required></textarea>
</label>
```

Tukar label soalan sahaja kalau perlu. Jangan tukar `id="harapan"` kecuali update `script.js` line 17.

---

## C8. Edit button form

**File:** `index.html`  
**Line:** 175–176

```html
<button class="btn primary full" type="submit">Wasap Sekarang</button>
<p class="button-note full">akan diadakan sesi interview khusus untuk tentukan bacaan anda</p>
```

Tukar text button di line 175.  
Tukar note bawah button di line 176.

---

# D. Edit FAQ Section — `index.html`

FAQ berada di line 180–197.

```html
<section id="faq" class="section faq-section">
  <p class="eyebrow">FAQ Section</p>
  <h2>Soalan lazim</h2>
  <div class="faq-list">
    <details>
      <summary>FAQ 1</summary>
      <p>Masukkan jawapan FAQ di sini.</p>
    </details>
    <details>
      <summary>FAQ 2</summary>
      <p>Masukkan jawapan FAQ di sini.</p>
    </details>
    <details>
      <summary>FAQ 3</summary>
      <p>Masukkan jawapan FAQ di sini.</p>
    </details>
  </div>
</section>
```

Untuk edit soalan:

```html
<summary>Soalan anda</summary>
```

Untuk edit jawapan:

```html
<p>Jawapan anda di sini.</p>
```

Untuk tambah FAQ baru, copy block ini dan paste sebelum `</div>` line 196:

```html
<details>
  <summary>FAQ baru</summary>
  <p>Jawapan FAQ baru.</p>
</details>
```

---

# E. Edit Button Tutor/Pengajar — `index.html` dan `script.js`

## E1. Edit section tutor/pengajar

**File:** `index.html`  
**Line:** 199–203

```html
<section class="section tutor-cta">
  <h2>Daftar sebagai tutor/pengajar</h2>
  <p>Untuk ustaz/ustazah yang ingin daftar sebagai tutor atau pengajar AQHBAR.</p>
  <a class="btn primary" id="tutorButton" href="#">Daftar Sebagai Tutor/Pengajar</a>
</section>
```

Yang boleh edit:

- Tajuk: line 200
- Description: line 201
- Text button: line 202

Penting: jangan buang `id="tutorButton"`, sebab `script.js` guna ID itu untuk buka WhatsApp.

---

## E2. Edit mesej WhatsApp untuk tutor/pengajar

**File:** `script.js`  
**Line:** 31

```js
const message = 'Assalamualaikum AQHBAR Academy. Saya nak daftar sebagai tutor/pengajar.';
```

Tukar text dalam quote sahaja.

---

# F. Edit Sales Page Product 2 — `tadabbur.html`

Page ini khas untuk `Daftar Kelas Tadabbur Bulanan`.

## F1. Tukar title tab browser Tadabbur

**File:** `tadabbur.html`  
**Line:** 6

```html
<title>Kelas Tadabbur Bulanan | AQHBAR Academy</title>
```

---

## F2. Tukar header/nav di page Tadabbur

**File:** `tadabbur.html`  
**Line:** 11–16

```html
<a class="brand" href="index.html"><span>A</span> AQHBAR Academy</a>
<nav>
  <a href="index.html#program">Program</a>
  <a href="index.html#form">Daftar</a>
  <a href="tadabbur.html">Tadabbur</a>
  <a href="index.html#faq">FAQ</a>
</nav>
```

Link `index.html#program` bermaksud balik ke homepage section Program.

---

## F3. Tukar hero sales page Tadabbur

**File:** `tadabbur.html`  
**Line:** 23–27

```html
<p class="eyebrow">Sales page khusus</p>
<h1>Daftar Kelas Tadabbur Bulanan</h1>
<p>Kelas Tadabbur Bulanan untuk anda yang nak belajar secara santai.</p>
<a class="btn primary" href="index.html#form">Daftar Kelas Tadabbur Bulanan</a>
<p class="button-note">akan diadakan sesi interview khusus untuk tentukan bacaan anda</p>
```

Button pergi ke form homepage sebab:

```html
href="index.html#form"
```

---

## F4. Tukar card highlight Tadabbur

**File:** `tadabbur.html`  
**Line:** 30–31

```html
<p class="card-kicker">Percuma satu sesi 45 minit</p>
<h2>Percuma Tahsin Al-Fatihah & Bacaan Dalam Solat</h2>
```

---

## F5. Tukar isi ringkas kelas Tadabbur

**File:** `tadabbur.html`  
**Line:** 36–42

```html
<p class="eyebrow">Apa yang ada dalam kelas</p>
<h2>Kelas Tadabbur Bulanan</h2>
<div class="pill-grid">
  <span>Percuma satu sesi 45 minit</span>
  <span>Tahsin Al-Fatihah</span>
  <span>Bacaan dalam solat</span>
  <span>Profile penceramah</span>
</div>
```

Setiap `<span>` ialah satu item.

---

## F6. Edit profile penceramah

**File:** `tadabbur.html`  
**Line:** 46–67

Contoh satu card:

```html
<article class="speaker-card">
  <h3>Nama Penceramah 1</h3>
  <p>Masukkan profile penceramah di sini.</p>
</article>
```

Untuk edit nama penceramah, tukar line `<h3>...</h3>`.  
Untuk edit profile, tukar line `<p>...</p>`.

Ada 4 card sekarang:

| Penceramah | Line nama | Line profile |
|---|---:|---:|
| Penceramah 1 | 51 | 52 |
| Penceramah 2 | 55 | 56 |
| Penceramah 3 | 59 | 60 |
| Penceramah 4 | 63 | 64 |

Kalau nak buang satu penceramah, delete satu block penuh:

```html
<article class="speaker-card">
  <h3>Nama Penceramah</h3>
  <p>Profile penceramah.</p>
</article>
```

---

## F7. Edit CTA bawah page Tadabbur

**File:** `tadabbur.html`  
**Line:** 69–73

```html
<section class="section tutor-cta">
  <h2>Daftar Kelas Tadabbur Bulanan</h2>
  <a class="btn primary" href="index.html#form">Wasap Sekarang</a>
  <p class="button-note">akan diadakan sesi interview khusus untuk tentukan bacaan anda</p>
</section>
```

Button ini pergi ke form homepage.

---

# G. Edit WhatsApp — `script.js`

## G1. Tukar nombor WhatsApp

**File:** `script.js`  
**Line:** 1

```js
const whatsappNumber = '60179251799';
```

Format nombor perlu guna country code dan tanpa simbol `+`.

Contoh:

```js
const whatsappNumber = '60123456789';
```

---

## G2. Tukar format mesej WhatsApp daripada form

**File:** `script.js`  
**Line:** 20

```js
const message = `Assalamualaikum AQHBAR Academy. Saya nak daftar kelas.\n\nNama: ${data.nama}\nNo Telefon: ${data.telefon}\nEmail: ${data.email}\nTahap Bacaan: ${data.tahap}\nWarna Kegemaran: ${data.warna}\nPilihan Tutor: ${data.tutor}\nKelas Pilihan: ${data.kelas}\nHarapan/Cita-cita: ${data.harapan}`;
```

Kalau nak tukar ayat awal sahaja:

```js
Assalamualaikum AQHBAR Academy. Saya nak daftar kelas.
```

Kalau nak tambah field baru dalam message, pastikan field itu juga wujud dalam `index.html` dan `data` object.

---

## G3. Tambah field form baru dan masuk dalam WhatsApp message

Contoh nak tambah field `Umur`.

### Step 1 — Tambah field di `index.html`

Letak dalam form, contoh selepas telefon:

```html
<label>Umur
  <input type="text" id="umur" name="umur" required />
</label>
```

### Step 2 — Tambah dalam data object di `script.js`

**File:** `script.js`  
**Line:** sekitar 9–18

Tambah:

```js
umur: document.getElementById('umur').value,
```

### Step 3 — Tambah dalam message

**File:** `script.js`  
**Line:** 20

Tambah dalam template message:

```js
\nUmur: ${data.umur}
```

---

# H. Edit design/warna — `styles.css`

## H1. Tukar warna utama website

**File:** `styles.css`  
**Line:** 1–9

```css
:root {
  --bg: #f7f3ea;
  --card: #fffaf0;
  --text: #1d1b16;
  --muted: #625b4f;
  --line: #e5dccd;
  --accent: #1f6f5b;
  --accent-dark: #174f42;
}
```

Maksud variable:

| Variable | Fungsi |
|---|---|
| `--bg` | Warna background utama |
| `--card` | Warna card |
| `--text` | Warna text utama |
| `--muted` | Warna text description |
| `--line` | Warna border |
| `--accent` | Warna button/brand utama |
| `--accent-dark` | Warna accent gelap |

Kalau nak tukar warna button utama, tukar `--accent` dan `--accent-dark`.

---

## H2. Tukar font website

**File:** `styles.css`  
**Line:** 15

```css
font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
```

Kalau nak guna font system sahaja, boleh kekalkan. Jangan tukar kalau tak pasti.

---

## H3. Tukar design header

**File:** `styles.css`  
**Line:** 22–34

Header sticky di atas page sebab:

```css
position: sticky;
top: 0;
```

Kalau tak nak sticky, tukar:

```css
position: static;
```

---

## H4. Tukar saiz section spacing

**File:** `styles.css`  
**Line:** 50

```css
.section { padding: 78px 6vw; }
```

Nilai pertama `78px` ialah jarak atas bawah.  
Nilai kedua `6vw` ialah jarak kiri kanan.

Contoh kecilkan spacing:

```css
.section { padding: 56px 5vw; }
```

---

## H5. Tukar layout hero

**File:** `styles.css`  
**Line:** 51–57

```css
.hero {
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(280px, 0.8fr);
  gap: 34px;
  align-items: center;
  min-height: 78vh;
}
```

Bahagian ini control hero jadi dua column desktop.

---

## H6. Tukar design button

**File:** `styles.css`  
**Line:** 72–84

```css
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  padding: 14px 22px;
  font-weight: 800;
  border: 1px solid var(--accent);
  cursor: pointer;
}
.btn.primary, .btn.small { background: var(--accent); color: white; }
.btn.secondary { color: var(--accent-dark); background: transparent; }
.btn.small { padding: 11px 16px; font-size: 14px; margin-top: 10px; }
```

Nak button kurang bulat, tukar:

```css
border-radius: 16px;
```

Nak button lebih besar, naikkan padding:

```css
padding: 16px 28px;
```

---

## H7. Tukar design card

**File:** `styles.css`  
**Line:** 86–91

```css
.hero-card, .product-card, .speaker-card, .lead-form, .tutor-cta, details {
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: 28px;
  box-shadow: 0 20px 60px rgba(29, 27, 22, 0.06);
}
```

Nak card kurang bulat:

```css
border-radius: 18px;
```

Nak buang shadow:

```css
box-shadow: none;
```

---

## H8. Tukar product grid daripada 3 column

**File:** `styles.css`  
**Line:** 110–115

```css
.product-grid, .speaker-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
  margin-top: 34px;
}
```

Kalau nak 2 column:

```css
grid-template-columns: repeat(2, minmax(0, 1fr));
```

Kalau nak 1 column:

```css
grid-template-columns: 1fr;
```

---

## H9. Tukar form layout

**File:** `styles.css`  
**Line:** 124–130

```css
.lead-form {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
  padding: 28px;
  margin-top: 30px;
}
```

Kalau nak semua field satu column di desktop:

```css
grid-template-columns: 1fr;
```

---

## H10. Responsive mobile

**File:** `styles.css`  
**Line:** 151–155

```css
@media (max-width: 900px) {
  .hero, .product-grid, .speaker-grid, .lead-form { grid-template-columns: 1fr; }
  .site-header { align-items: flex-start; flex-direction: column; }
  .section { padding: 56px 5vw; }
}
```

Bahagian ini buat layout jadi satu column bila screen kecil.

---

# I. Checklist sebelum push ke GitHub

Sebelum commit, check benda ini:

- [ ] Semua product card guna perkataan `Daftar Kelas...`
- [ ] Button WhatsApp guna text `Wasap Sekarang`
- [ ] Text interview ada bawah button yang berkaitan
- [ ] Product 2 link ke `tadabbur.html`
- [ ] `tadabbur.html` wujud dalam root repo
- [ ] Form ada field nama, no telefon, email, tahap bacaan, warna kegemaran, pilihan tutor, kelas pilihan, harapan/cita-cita
- [ ] `script.js` nombor WhatsApp betul
- [ ] Jangan tukar ID form tanpa update `script.js`
- [ ] Vercel deploy berjaya selepas commit

---

# J. Apa perlu buat kalau website rosak selepas edit

## Masalah 1: Button WhatsApp tak buka

Check:

- `script.js` wujud dalam repo
- `index.html` line 210 ada:

```html
<script src="script.js"></script>
```

- Nombor WhatsApp di `script.js` line 1 betul

---

## Masalah 2: Form submit tapi message kosong/error

Biasanya sebab ID field berubah.

Pastikan ID di `index.html` sama dengan `script.js`:

| Field | ID di `index.html` | Line `script.js` |
|---|---|---:|
| Nama | `nama` | 10 |
| Telefon | `telefon` | 11 |
| Email | `email` | 12 |
| Tahap | `tahap` | 13 |
| Warna | `warna` | 14 |
| Tutor | `tutor` | 15 |
| Kelas | `kelas` | 16 |
| Harapan | `harapan` | 17 |

---

## Masalah 3: Page Tadabbur 404

Pastikan file `tadabbur.html` ada di root repo, sama level dengan `index.html`.

Struktur sepatutnya:

```text
index.html
tadabbur.html
styles.css
script.js
```

---

## Masalah 4: Design tak berubah

Check `index.html` dan `tadabbur.html` ada link CSS:

```html
<link rel="stylesheet" href="styles.css" />
```

`index.html`: line 7  
`tadabbur.html`: line 7

---

# K. Cara paling selamat bila nak edit content

1. Edit satu bahagian sahaja dulu.
2. Commit.
3. Tunggu Vercel deploy.
4. Check website.
5. Baru sambung bahagian lain.

Ini lebih senang detect error berbanding edit semua sekali.
