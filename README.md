# AQHBAR Academy Website

Website statik untuk **AQHBAR Academy** — kelas Al-Quran online berstruktur untuk dewasa dan profesional sibuk.

## Kandungan folder

```text
index.html   -> Struktur website dan copywriting penuh Bahasa Melayu
styles.css   -> Styling UI premium/corporate/responsive
script.js    -> Menu mobile, FAQ accordion, tahun footer
```

## Cara guna di GitHub

1. Buka repo GitHub baru.
2. Upload semua file ini ke root repo.
3. Commit changes.
4. Pergi ke **Settings > Pages**.
5. Pilih branch `main` dan folder `/root`.
6. Save. GitHub akan generate link website.

## Cara edit nombor WhatsApp

Cari `60179251799` dalam `index.html` dan tukar kepada nombor baru dalam format antarabangsa tanpa `+`.

Contoh:

```text
https://wa.me/60179251799
```

## Cara edit harga

Cari section `Pakej Kelas` dalam `index.html`.

Harga semasa:

- Sesi Semakan Bacaan: RM0 / 30 minit
- Kelas Kumpulan Kecil: RM200 / kumpulan / bulan
- Kelas Personal 1-ke-1: RM250 / bulan
- Pelan Custom Dewasa / Executive: custom

## Prompt Claude untuk sambung improve

Copy prompt ini kalau mahu Claude polish atau convert ke framework lain:

```text
You are a senior Malaysian landing page designer and frontend developer. I have a static website for AQHBAR Academy, a Bahasa Melayu online Quran academy for adult learners and busy professionals.

Please improve the website while keeping the concept:
- Fully Bahasa Melayu
- Premium, clean, trustworthy, Islamic-friendly but not overly decorative
- Target audience: Malay adults, working professionals, executives, adults who feel shy to restart Quran learning
- Main offer: Sesi Semakan Bacaan Percuma 30 Minit
- Contact CTA: WhatsApp Ustaz Aqil at 017-925 1799
- Classes: 1-to-1 online, small group, custom executive/family/corporate plan
- Pricing: Group RM200 per group/month, max 5 people, 2 sessions/week, around 1 hour/session. 1-to-1 RM250/month, 4 sessions/month, around 1 hour/session.

Improve UI, spacing, hierarchy, responsiveness, CTA conversion and copy clarity. Do not make it crowded. Make it feel high-end and easy to understand within 10 seconds.
```
