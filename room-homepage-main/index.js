const slider = document.querySelector(".hero ul");
const slide = slider.querySelector("li");
const prevBtn = document.querySelector(".slider-btns button:first-child");
const nextBtn = document.querySelector(".slider-btns button:last-child");

const navbar = document.querySelector("nav");
const hamburgerBtn = document.querySelector(".hamburger-btn");
const overlay = document.querySelector(".overlay");

const media = window.matchMedia("(min-width: 68.125rem)");

media.addEventListener("change", (e) => updateNavbar(e));

// Make navbar untabable based on viewport width and close it if it is open
function updateNavbar(e) {
  if (e.matches) {
    navbar.removeAttribute("inert");
    const isExpanded = hamburgerBtn.getAttribute("aria-expanded") === "true";
    if (isExpanded) {
      toggleNav();
    }
  } else {
    navbar.setAttribute("inert", "");
  }
}

//Slider

prevBtn.addEventListener("click", () => {
  slider.scrollBy({ left: -slide.offsetWidth });
});

nextBtn.addEventListener("click", () => {
  slider.scrollBy({ left: slide.offsetWidth });
});

//Navigation

hamburgerBtn.addEventListener("click", () => {
  toggleNav();
});

overlay.addEventListener("click", () => {
  toggleNav();
});

function toggleNav() {
  const isExpanded = hamburgerBtn.getAttribute("aria-expanded") === "true";
  hamburgerBtn.setAttribute("aria-expanded", !isExpanded);

  const img = hamburgerBtn.querySelector("img");

  img.setAttribute(
    "src",
    !isExpanded
      ? "./assets/images/icon-close.svg"
      : "./assets/images/icon-hamburger.svg"
  );

  img.setAttribute(
    "alt",
    !isExpanded ? "Close navigation menu" : "Open navigation menu"
  );

  !isExpanded
    ? navbar.removeAttribute("inert")
    : navbar.setAttribute("inert", "");
}

updateNavbar(media);

// Dynamically change aria-labelledby of section
const heroSection = document.querySelector(".hero");
const slides = Array.from(slider.querySelectorAll("li"));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const h2 = entry.target.querySelector("h2");
        if (h2?.id) {
          heroSection.setAttribute("aria-labelledby", h2.id);
        }
      }
    });
  },
  {
    root: slider,
    threshold: 0.6,
  }
);

slides.forEach((slide) => observer.observe(slide));
