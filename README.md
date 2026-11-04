# Emmanuel Mbanu — Portfolio

A one-page portfolio for GitHub Pages. No build step and no frameworks: plain HTML, CSS and JavaScript.

## Files

```
index.html                 The page itself (all the text lives here)
assets/css/style.css       Colours, fonts and layout (light and dark themes)
assets/js/main.js          Site settings + theme toggle, menu, contact form
images/emmanuel-mbanu.jpg  Your headshot (hero section)
images/projects/           Dashboard images for each case study + photos for "More projects"
```

## How to publish (replacing the old HTML5 UP template)

1. In your `theanalyst` repo, delete the old template files (you can delete `images/` too — this package brings its own)
   (old files: `elements.html`, `generic.html`, `assets/sass`, `assets/webfonts`, `assets/js/*`, `assets/css/main.css`, `LICENSE.txt`, `README.txt`).
2. Upload everything in this folder to the root of the repo (keep the folder structure).
3. Commit. GitHub Pages updates in a minute or two at https://mbanuemmanuel8-ai.github.io/theanalyst/

Client names are withheld everywhere on the site. The original project files are not included, because they contain client names. Share redacted copies on request.

## Details still to add (all hidden until you fill them in)

Open `assets/js/main.js` and fill in the `SITE` settings at the top:

| Setting   | What to add                                  | Where it appears              |
|-----------|----------------------------------------------|-------------------------------|
| linkedin  | Your LinkedIn profile URL                    | Hero links + Contact          |
| cv        | e.g. `Emmanuel-Mbanu-CV.pdf` (upload the PDF to the repo root) | "Download CV" button in the hero |
| phone     | Optional phone number                        | Contact                       |

Content to add in `index.html` when you're ready:

- First Bank of Nigeria: dates for each role and 2–3 quantified achievements.
- Case study dates: the Save a Life dashboard is labelled "Jun 2026" (taken from the file's screenshot dates) — change it if wrong.
- Write-ups for the four "More projects" cards (Sentinel ASEAN, Unilever Canteen, Instacart, Amdari). Copy any `<article class="case">` block as a template.
- The case study images in `images/projects/` were rebuilt from your project data. To use a screenshot from Power BI or Excel instead, save it with the same file name (e.g. `hospital-dashboard.jpg`), cropping out any client names.
- MSc result once you receive it (Credentials section).

## Editing tips

- Colours are defined once at the top of `style.css` (`--accent` is the main teal).
- Every project is one `<article>` in the "Case studies" section; edit text directly.
- Each case study image is a normal .jpg in `images/projects/`.
