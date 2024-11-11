const modal = document.getElementById("modal");
const btn = document.getElementById("open-menu");

btn.addEventListener("click", () => {
  if (modal.classList.contains("open")) {
    modal.classList.remove("open");
    modal.ariaExpanded = "false";
    btn.ariaLabel = "Open navigation menu";
  } else {
    modal.classList.add("open");
    modal.ariaExpanded = "true";
    btn.ariaLabel = "Close navigation menu";
  }
});

// Closing modal after 720px screen size, just bugs me on testing
window.addEventListener("resize", reset);

function reset() {
  const w = window.innerWidth;
  if (w >= 720) {
    modal.classList.remove("open");
    modal.ariaExpanded = "false";
  }
}
