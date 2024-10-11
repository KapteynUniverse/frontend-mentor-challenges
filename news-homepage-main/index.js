const openMenu = document.getElementById("menu-open");
const closeMenu = document.getElementById("menu-close");
const navbar = document.getElementById("navbar");

openMenu.addEventListener("click", toggleMenu);
closeMenu.addEventListener("click", toggleMenu);

function toggleMenu() {
  const isOpen = navbar.classList.toggle("visually-hidden");
  openMenu.setAttribute("aria-hidden", !isOpen);
  navbar.setAttribute("aria-hidden", isOpen);
  openMenu.setAttribute("aria-expanded", !isOpen);
  navbar.setAttribute("aria-expanded", isOpen);
}
