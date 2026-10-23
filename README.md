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

Selected work and recent updates are curated separately from the complete publication list. When adding a paper, include its arXiv abstract, PDF, and DOI when available. Only link slides or recordings that are publicly available; an event record is not a slide deck.

## Content verification (23 October 2026)

- Publications and coauthors: [INSPIRE record](https://inspirehep.net/authors/1945409), individual arXiv records and publisher DOIs linked in the page. The 2026 cosmology preprint uses the revised July title; the five-point PRD paper uses article number 105022. The ABJM Amplituhedron entry includes its 2024 erratum.
- Institutional email: [MPP theory group directory](https://wwwth.mpp.mpg.de/).
- Talk titles, dates, venues and materials: official CERN Indico, Indico Global, MPI MiS, INFN and NTU-Kyoto event pages linked in the Talks section, with the author's corrections taking precedence. Chia-Kai confirmed that the ICHEP 2024 presentation concerned "BDS ansatz in ABJM via scaffolding triangulations." That entry links to both the conference homepage and the related paper, not the mismatched Indico contribution. Only the month is shown because the exact day is not confirmed for the corrected entry. The September 2026 Pollica talk comes from the official INFN timetable.
- These edits update the website only; the supplied downloadable CV is preserved as provided.

Research descriptions are grounded in the papers linked within each topic. The overview uses first-person singular for research interests; selected-paper summaries use "we" for collaborative results. Keep the distinction between loop integrands and integrated amplitudes, and avoid presenting conjectured all-order constructions as fully established results. Formal publication titles are not copyedited.

## Portrait

To update the portrait later, replace `assets/chia-kai-kuo-portrait.jpg` with a new image using the same filename.
