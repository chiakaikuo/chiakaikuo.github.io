# Chia-Kai Kuo Academic Website

Static academic website built from the supplied CV, INSPIRE profile, ORCID profile, and reference-site structure.

## Files

- `index.html`: page content and sections
- `styles.css`: responsive site design
- `script.js`: mobile navigation, active links, publication search and year filters, footer year
- `assets/chia-kai-kuo-cv.pdf`: downloadable CV
- `assets/chia-kai-kuo-portrait.jpg`: portrait image
- `assets/icons/`: locally hosted Lucide icons and their license

## Design and maintenance

The site uses a responsive, light academic layout with system fonts and no build step or external runtime dependencies. Publication content lives in `index.html`; search and year options are derived from that list automatically. All papers remain readable without JavaScript.

The public site is https://chiakaikuo.github.io/ and deploys from the `main` branch. When updating CSS, JavaScript, the portrait, or the CV, update the corresponding version query in `index.html` to avoid stale browser caches.

## Portrait

To update the portrait later, replace `assets/chia-kai-kuo-portrait.jpg` with a new image using the same filename.
