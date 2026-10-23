const toggle = document.querySelector("[data-nav-toggle]");
const menu = document.querySelector("[data-nav-menu]");
const navLinks = [...menu.querySelectorAll("a")];
const mobileViewport = window.matchMedia("(max-width: 800px)");

function setMenuOpen(open) {
  menu.classList.toggle("is-open", open);
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  toggle.title = open ? "Close navigation" : "Open navigation";
}

toggle.addEventListener("click", () => {
  setMenuOpen(toggle.getAttribute("aria-expanded") !== "true");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => setMenuOpen(false));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
    setMenuOpen(false);
    toggle.focus();
  }
});

document.addEventListener("click", (event) => {
  if (!menu.contains(event.target) && !toggle.contains(event.target)) setMenuOpen(false);
});

document.addEventListener("focusin", (event) => {
  if (!menu.contains(event.target) && !toggle.contains(event.target)) setMenuOpen(false);
});

mobileViewport.addEventListener("change", () => setMenuOpen(false));

const sections = navLinks.map((link) => document.querySelector(link.hash));
let scrollPending = false;

function updateActiveSection() {
  let activeSection = sections[0];
  for (const section of sections) {
    if (section.getBoundingClientRect().top <= 140) activeSection = section;
  }
  if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4) {
    activeSection = sections[sections.length - 1];
  }
  navLinks.forEach((link) => {
    const active = link.hash === `#${activeSection.id}`;
    link.classList.toggle("is-active", active);
    if (active) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  });
  scrollPending = false;
}

function scheduleSectionUpdate() {
  if (scrollPending) return;
  scrollPending = true;
  window.requestAnimationFrame(updateActiveSection);
}

window.addEventListener("scroll", scheduleSectionUpdate, { passive: true });
window.addEventListener("resize", scheduleSectionUpdate);
window.addEventListener("load", scheduleSectionUpdate);
updateActiveSection();

const tools = document.querySelector("[data-publication-tools]");
const search = document.querySelector("#publication-search");
const year = document.querySelector("#publication-year");
const count = document.querySelector("[data-result-count]");
const empty = document.querySelector("[data-empty-results]");
const normalize = (value) => value.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
const papers = [...document.querySelectorAll(".publication-list > li")].map((element) => ({
  element,
  year: element.querySelector(".pub-year").textContent.trim(),
  text: normalize(element.textContent),
}));

// Derive filter options from the publication list so future additions need only HTML edits.
[...new Set(papers.map((paper) => paper.year))].sort((a, b) => b.localeCompare(a)).forEach((value) => {
  year.add(new Option(value, value));
});

function filterPublications() {
  const terms = normalize(search.value).trim().split(/\s+/).filter(Boolean);
  let matches = 0;
  papers.forEach((paper) => {
    const visible = (year.value === "all" || paper.year === year.value)
      && terms.every((term) => paper.text.includes(term));
    paper.element.hidden = !visible;
    if (visible) matches += 1;
  });
  count.textContent = `${matches} ${matches === 1 ? "paper" : "papers"}`;
  empty.hidden = matches !== 0;
  scheduleSectionUpdate();
}

function revealPublication(id) {
  const publication = document.getElementById(id);
  if (!publication?.matches(".publication-list > li") || !publication.hidden) return null;
  search.value = "";
  year.value = "all";
  filterPublications();
  return publication;
}

// Research links must still reach their paper after a publication filter hides it.
document.querySelectorAll('.research-links a[href^="#"]').forEach((link) => {
  link.addEventListener("click", () => revealPublication(link.hash.slice(1)));
});

window.addEventListener("hashchange", () => {
  const publication = revealPublication(window.location.hash.slice(1));
  if (publication) publication.scrollIntoView({ block: "start" });
});

tools.addEventListener("submit", (event) => event.preventDefault());
search.addEventListener("input", filterPublications);
year.addEventListener("change", filterPublications);
document.querySelector("[data-reset-search]").addEventListener("click", () => {
  search.value = "";
  year.value = "all";
  filterPublications();
  search.focus();
});

tools.hidden = false;
filterPublications();
document.querySelector("[data-year]").textContent = new Date().getFullYear();
