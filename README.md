# AQHBAR Academy V3 Website

Premium static website for AQHBAR Academy — designed as a Quran restart experience for adults, professionals, families and corporate learners.

## Files

```txt
index.html
styles.css
script.js
README.md
```

## Deploy to GitHub + Vercel

1. Create a new GitHub repository.
2. Upload these files into the root of the repository.
3. Make sure `index.html` is in the root folder, not inside another folder.
4. Commit the files.
5. Go to Vercel.
6. Click **Add New Project**.
7. Import your GitHub repository.
8. Use these settings:

```txt
Framework Preset: Other
Build Command: leave empty
Output Directory: .
Install Command: leave empty
```

9. Click **Deploy**.

## WhatsApp Number

The WhatsApp number is currently set to:

```txt
60179251799
```

To change it:

1. Open `script.js`.
2. Change this line:

```js
const whatsappNumber = '60179251799';
```

3. Also search `60179251799` in `index.html` and replace it if needed.

## Lead Form / Database Options

The current form opens WhatsApp with the user's submitted details pre-filled.

For database collection, connect the form to one of these options:

- Tally form embed
- Google Forms + Google Sheets
- Formspree
- Getform
- Basin
- Airtable

Recommended simple setup:

- Phase 1: use current WhatsApp form
- Phase 2: replace form with Tally embed or connect to Google Sheets
- Phase 3: use Airtable CRM if lead volume grows

## Content Notes

This website avoids fixed pricing because AQHBAR's package structure may change. The program section uses flexible pathways:

- Sesi Tahsin Percuma
- Private 1-to-1
- Kumpulan / Family / Corporate
- Tahsin Quran
- Tajwid Praktikal
- Tadabbur Mingguan
- Fardu Ain Dewasa

## Design Direction

The website is intentionally:

- premium
- calm
- spacious
- executive-friendly
- beginner-friendly
- not overly decorative
- not salesy

Primary conversion goal:

```txt
Mohon Sesi Tahsin Percuma
```
