/* =========================================================================
   SITE SETTINGS — edit these when you're ready.
   Anything left as "" stays hidden on the page, so nothing looks broken.
   ========================================================================= */
const SITE = {
  email: "mbanuemmanuel8@gmail.com",
  linkedin: "",   // e.g. "https://www.linkedin.com/in/your-profile/"
  github: "https://github.com/mbanuemmanuel8-ai",
  cv: "",         // e.g. "Emmanuel-Mbanu-CV.pdf" once you upload your CV
  phone: ""       // e.g. "+44 7xxx xxxxxx" (optional)
};

(function () {
  "use strict";

  /* ---- Apply settings: fill links, hide anything not set yet ---- */
  document.querySelectorAll("[data-config]").forEach(function (el) {
    const key = el.getAttribute("data-config");
    const value = SITE[key];
    if (!value) { el.setAttribute("data-config-hidden", ""); return; }
    if (el.tagName === "A") {
      if (key === "email") el.href = "mailto:" + value;
      else if (key === "phone") el.href = "tel:" + value.replace(/\s+/g, "");
      else el.href = value;
    }
    el.querySelectorAll("[data-config-text]").forEach(function (t) { t.textContent = value; });
  });

  /* ---- Theme toggle (remembers the choice when the browser allows it) ---- */
  const root = document.documentElement;
  const toggle = document.getElementById("theme-toggle");
  try {
    const saved = localStorage.getItem("em-theme");
    if (saved === "light" || saved === "dark") root.setAttribute("data-theme", saved);
  } catch (e) { /* storage unavailable: follow the system setting */ }

  function currentTheme() {
    const set = root.getAttribute("data-theme");
    if (set) return set;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  function syncToggle() {
    if (!toggle) return;
    const dark = currentTheme() === "dark";
    toggle.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
    toggle.querySelector(".i-sun").hidden = !dark;
    toggle.querySelector(".i-moon").hidden = dark;
  }
  if (toggle) {
    toggle.addEventListener("click", function () {
      const next = currentTheme() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("em-theme", next); } catch (e) {}
      syncToggle();
    });
    syncToggle();
  }

  /* ---- Mobile menu ---- */
  const menuBtn = document.getElementById("menu-btn");
  const navLinks = document.getElementById("nav-links");
  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", function () {
      const open = navLinks.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", String(open));
    });
    navLinks.addEventListener("click", function (e) {
      if (e.target.closest("a")) { navLinks.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false"); }
    });
  }

  /* ---- Portrait fallback: show initials if the photo can't load ---- */
  const photo = document.getElementById("portrait-img");
  const mono = document.getElementById("portrait-mono");
  function showMono() { if (photo) photo.hidden = true; if (mono) mono.hidden = false; }
  if (photo) {
    photo.addEventListener("error", showMono);
    if (photo.complete && photo.naturalWidth === 0) showMono();
  }

  /* ---- Copy email ---- */
  const copyBtn = document.getElementById("copy-email");
  if (copyBtn) {
    copyBtn.addEventListener("click", function () {
      const done = function () { copyBtn.textContent = "Copied"; setTimeout(function () { copyBtn.textContent = "Copy"; }, 1800); };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(SITE.email).then(done, function () { selectEmail(); });
      } else { selectEmail(); }
    });
  }
  function selectEmail() {
    const el = document.getElementById("email-text");
    if (!el) return;
    const range = document.createRange(); range.selectNodeContents(el);
    const sel = window.getSelection(); sel.removeAllRanges(); sel.addRange(range);
  }

  /* ---- Contact form: opens the visitor's email app with the message filled in ---- */
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = form.querySelector("#cf-name").value.trim();
      const from = form.querySelector("#cf-email").value.trim();
      const subject = form.querySelector("#cf-subject").value.trim() || "Portfolio enquiry";
      const message = form.querySelector("#cf-message").value.trim();
      const status = document.getElementById("form-status");
      if (!name || !from || !message) { status.textContent = "Please add your name, email and a message."; return; }
      const body = message + "\n\n— " + name + " (" + from + ")";
      const href = "mailto:" + SITE.email + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
      status.textContent = "Opening your email app. If nothing opens, email " + SITE.email + " directly.";
      window.location.href = href;
    });
  }

  /* ---- Footer year ---- */
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
