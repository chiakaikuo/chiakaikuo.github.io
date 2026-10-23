# Chia-Kai Kuo Academic Website

Static academic website built from the supplied CV, INSPIRE profile, ORCID profile, and reference-site structure.

## Files

- `index.html`: page content and sections
- `styles.css`: responsive site design
- `script.js`: mobile navigation, active links, publication search and year filters, footer year
- `assets/chia-kai-kuo-cv.pdf`: downloadable CV
- `assets/chia-kai-kuo-cv.tex`: editable LaTeX source for the CV
- `assets/citations/`: downloadable BibTeX records from INSPIRE
- `assets/chia-kai-kuo-portrait.jpg`: portrait image
- `assets/icons/`: locally hosted Lucide icons and their license

## Design and maintenance

The site uses a responsive, light academic layout with system fonts and no build step or external runtime dependencies. Publication content lives in `index.html`; search and year options are derived from that list automatically. All papers remain readable without JavaScript.

The public site is https://chiakaikuo.github.io/ and deploys from the `main` branch. When updating CSS, JavaScript, the portrait, or the CV, update the corresponding version query in `index.html` to avoid stale browser caches.

Selected work and recent updates are curated separately from the complete publication list. Selected work uses full-width rows: a short thematic heading on the left, with the unchanged formal title, a result summary, and resources on the right. Each selected paper links to its related talk; the Talks section links back to related papers. The full list is ordered by descending display year, with preprints first within a year and journal articles ordered by publication date. Highlight Chia-Kai's name in each author list and include arXiv, PDF, DOI when available, and a local BibTeX download. See `assets/citations/README.md` for citation sources. Only link slides or recordings that are publicly available; an event record is not a slide deck.

Canonical and Open Graph metadata use the public site URL and existing portrait. Update the image dimensions and alternative text if replacing that portrait. Publication links have 44px minimum touch targets; long titles wrap and selected-work rows stack below 800px. Research links to individual publications clear filters only when those filters hide the target paper.

## Content verification (23 October 2026)

- Publications and coauthors: [INSPIRE record](https://inspirehep.net/authors/1945409), individual arXiv records and publisher DOIs linked in the page. The 2026 cosmology preprint uses the revised July title; the five-point PRD paper uses article number 105022. The ABJM Amplituhedron entry includes its 2024 erratum.
- Institutional email: [MPP theory group directory](https://wwwth.mpp.mpg.de/).
- Talk titles, dates, venues and materials: official CERN Indico, Indico Global, MPI MiS, INFN and NTU-Kyoto event pages linked in the Talks section, with the author's corrections taking precedence. Chia-Kai confirmed that the ICHEP 2024 presentation concerned "BDS ansatz in ABJM via scaffolding triangulations." That entry links to both the conference homepage and the related paper, not the mismatched Indico contribution. Only the month is shown because the exact day is not confirmed for the corrected entry. The September 2026 Pollica talk comes from the official INFN timetable.
- The downloadable CV and its LaTeX source are synchronized with the verified website content, including the corrected publication metadata and selected talks. The CV is two pages; both pages were rendered and visually checked after compilation.
- Research now starts with a short general introduction and organizes four directions around research questions. Selected-work summaries retain their verified scope. The five-point paper links to its public `result.m` ancillary file on arXiv, pinned to version 2. Existing public Berlin slides and CERN slides/video are also accessible from the corresponding selected work. The Pollica program currently lists no slides for this talk.

Research descriptions are grounded in the papers linked within each topic. The overview uses first-person singular for research interests; selected-paper summaries use "we" for collaborative results. Keep the distinction between loop integrands and integrated amplitudes, and avoid presenting conjectured all-order constructions as fully established results. Formal publication titles are not copyedited.

## Updating the CV

Edit `assets/chia-kai-kuo-cv.tex`, update its date, and compile twice with a LaTeX installation:

```bash
mkdir -p /tmp/kuo-cv-build
pdflatex -interaction=nonstopmode -halt-on-error -output-directory=/tmp/kuo-cv-build assets/chia-kai-kuo-cv.tex
pdflatex -interaction=nonstopmode -halt-on-error -output-directory=/tmp/kuo-cv-build assets/chia-kai-kuo-cv.tex
```

Check the compilation log and render every page to inspect wrapping, links, and page breaks before replacing `assets/chia-kai-kuo-cv.pdf` with the generated PDF. Keep the visible CV update date and both PDF version queries in `index.html` synchronized. Build intermediates should not be committed.

## Portrait

To update the portrait later, replace `assets/chia-kai-kuo-portrait.jpg` with a new image using the same filename.
