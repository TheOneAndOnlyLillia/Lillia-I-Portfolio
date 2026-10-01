function esc(str) {
  return String(str ?? "").replace(/[&<>"']/g, c =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}
 
function placeholder(label) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500">
    <rect width="100%" height="100%" fill="#d6ebe3"/>
    <text x="50%" y="50%" fill="#4d7a6a" font-family="sans-serif" font-size="28"
      text-anchor="middle" dominant-baseline="middle">${esc(label || "Image coming soon")}</text></svg>`;
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
}
 
// Swap broken images for the placeholder (runs once per image)
document.addEventListener("error", e => {
  const el = e.target;
  if (el.tagName === "IMG" && !el.dataset.fallback) {
    el.dataset.fallback = "1";
    el.src = placeholder(el.alt);
  }
  if (el.tagName === "VIDEO" && el.classList.contains("card-preview")) el.remove();
}, true);
 
// If the hero video file is missing, show its poster image instead
function heroVideoFallback(video) {
  const img = document.createElement("img");
  img.src = video.getAttribute("poster") || "";
  img.alt = video.dataset.title || "Final project";
  video.replaceWith(img);
}
 
function tagsHTML(tags) {
  if (!tags || !tags.length) return "";
  return `<ul class="tags">${tags.map(t => `<li>${esc(t)}</li>`).join("")}</ul>`;
}
 
// ---------- GALLERY (index.html) ----------
function renderGallery(containerId = "project-grid") {
  const grid = document.getElementById(containerId);
  if (!grid) return;
 
  // Keep anything already inside the grid (like the intro box) and add the cards after it
  grid.querySelectorAll(".project-card").forEach(c => c.remove());
  grid.insertAdjacentHTML("beforeend", PROJECTS.map(p => `
    <a class="project-card" href="project.html?id=${encodeURIComponent(p.id)}">
      <div class="card-media">
        <img src="${esc(p.thumbnail)}" alt="${esc(p.title)}" loading="lazy">
        ${p.previewVideo ? `<video class="card-preview" src="${esc(p.previewVideo)}" muted loop playsinline preload="none"></video>` : ""}
        <div class="card-overlay"><span>View project &rarr;</span></div>
      </div>
      <div class="card-body">
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.tagline)}</p>
        ${tagsHTML(p.tags)}
      </div>
    </a>`).join(""));
 
  // Play the preview video on hover (desktop) / focus (keyboard)
  grid.querySelectorAll(".project-card").forEach(card => {
    const vid = card.querySelector(".card-preview");
    if (!vid) return;
    const play = () => { vid.play().catch(() => {}); card.classList.add("playing"); };
    const stop = () => { vid.pause(); vid.currentTime = 0; card.classList.remove("playing"); };
    card.addEventListener("mouseenter", play);
    card.addEventListener("mouseleave", stop);
    card.addEventListener("focus", play);
    card.addEventListener("blur", stop);
  });
}
 
// ---------- PROJECT PAGE (project.html) ----------
function heroHTML(p) {
  const h = p.hero || { type: "image", src: p.thumbnail };
  if (h.type === "video") {
    return `<video src="${esc(h.src)}" poster="${esc(h.poster || p.thumbnail)}" data-title="${esc(p.title)}"
      controls playsinline onerror="heroVideoFallback(this)"></video>`;
  }
  if (h.type === "youtube") {
    return `<div class="video-embed"><iframe src="https://www.youtube.com/embed/${esc(h.src)}"
      title="${esc(p.title)}" allow="accelerometer; autoplay; encrypted-media; picture-in-picture"
      allowfullscreen></iframe></div>`;
  }
  return `<img src="${esc(h.src)}" alt="${esc(p.title)} final build">`;
}
 
function stepsHTML(steps) {
  if (!steps || !steps.length) return "";
  // Uses the timeline classes from your index.css
  // (.timeline, .timeline-item, .timeline-dot, .timeline-row, .timeline-media, .timeline-content)
  return `
    <section class="development">
      <h2>Development</h2>
      <div class="timeline">
        ${steps.map((s, i) => `
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-row">
              ${s.images && s.images.length ? `
                <div class="timeline-media">
                  ${s.images.map(img => `
                    <figure>
                      <img src="${esc(img.src)}" alt="${esc(img.caption || s.title)}" loading="lazy" data-lightbox>
                      ${img.caption ? `<figcaption>${esc(img.caption)}</figcaption>` : ""}
                    </figure>`).join("")}
                </div>` : ""}
              <div class="timeline-content">
                <span class="project-date">Step ${i + 1}${s.date ? ` &middot; ${esc(s.date)}` : ""}</span>
                <h3>${esc(s.title)}</h3>
                ${s.text ? `<p>${s.text}</p>` /* text allows simple HTML like <b> or <a> */ : ""}
              </div>
            </div>
          </div>`).join("")}
      </div>
    </section>`;
}
 
function renderProject(containerId = "project") {
  const main = document.getElementById(containerId);
  if (!main) return;
 
  const id = new URLSearchParams(location.search).get("id");
  const index = PROJECTS.findIndex(p => p.id === id);
 
  if (index === -1) {
    main.innerHTML = `<div class="not-found"><h1>Project not found</h1>
      <p><a href="index.html">&larr; Back to all projects</a></p></div>`;
    return;
  }
 
  const p = PROJECTS[index];
  const prev = PROJECTS[(index - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(index + 1) % PROJECTS.length];
  document.title = `${p.title} | Portfolio`;
 
  main.innerHTML = `
    <section class="hero">
      <div class="hero-media">${heroHTML(p)}</div>
      <div class="hero-text">
        ${p.date ? `<span class="hero-date">${esc(p.date)}</span>` : ""}
        <h1>${esc(p.title)}</h1>
        <p class="hero-tagline">${esc(p.tagline)}</p>
        ${tagsHTML(p.tags)}
        ${p.links && p.links.length ? `<div class="hero-links">
          ${p.links.map(l => `<a class="proj-btn" href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)}</a>`).join("")}
        </div>` : ""}
      </div>
    </section>
 
    ${p.summary ? `<section class="overview"><h2>Overview</h2><p>${p.summary}</p></section>` : ""}
 
    ${stepsHTML(p.steps)}
 
    ${PROJECTS.length > 1 ? `
    <nav class="project-nav">
      <a href="project.html?id=${encodeURIComponent(prev.id)}">&larr; ${esc(prev.title)}</a>
      <a href="project.html?id=${encodeURIComponent(next.id)}">${esc(next.title)} &rarr;</a>
    </nav>` : ""}`;
 
  setupLightbox();
}
 
// ---------- click-to-enlarge photos ----------
function setupLightbox() {
  let box = document.getElementById("lightbox");
  if (!box) {
    box = document.createElement("div");
    box.id = "lightbox";
    box.className = "lightbox";
    box.innerHTML = `<button class="lb-close" aria-label="Close">&times;</button>
      <figure><img alt=""><figcaption></figcaption></figure>`;
    document.body.appendChild(box);
  }
  const bigImg = box.querySelector("img");
  const cap = box.querySelector("figcaption");
  const close = () => box.classList.remove("open");
 
  document.querySelectorAll("[data-lightbox]").forEach(img => {
    img.addEventListener("click", () => {
      bigImg.src = img.src;
      bigImg.alt = img.alt;
      cap.textContent = img.closest("figure")?.querySelector("figcaption")?.textContent || "";
      box.classList.add("open");
    });
  });
  box.addEventListener("click", e => { if (e.target !== bigImg) close(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") close(); });
}
 
// Auto-run on whichever page is loaded
document.addEventListener("DOMContentLoaded", () => {
  renderGallery();
  renderProject();
});
 
// Images elsewhere on the page that failed before this script loaded also get the placeholder
window.addEventListener("load", () => {
  document.querySelectorAll("img").forEach(img => {
    if (img.complete && img.naturalWidth === 0 && !img.dataset.fallback) {
      img.dataset.fallback = "1";
      img.src = placeholder(img.alt);
    }
  });
});
 
