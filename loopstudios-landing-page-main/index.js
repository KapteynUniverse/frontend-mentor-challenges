const header = document.getElementById("header");
const menu = document.getElementById("menu");
const nav = document.getElementById("nav");
const navList = document.getElementById("nav-list");
const navSection = document.getElementById("nav-section");
const wrapper = document.getElementById("header-wrapper");
const logo = document.getElementById("header-upper-section");

const style = {
  width: "100vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "2rem",
  fontSize: "2rem",
  fontFamily: "Josefin",
  textTransform: "uppercase",
};

menu.addEventListener("click", () => {
  if (menu.src.includes("icon-hamburger.svg")) {
    menu.src = "./assets/images/icon-close.svg";
    menu.width = "20";
    menu.height = "20";
    header.style.paddingTop = "0";
    logo.style.marginRight = "3.875rem";
    Object.assign(navList.style, style);
    navList.ariaHidden = "false";
    navList.ariaExpanded = "true";
    navSection.style.backgroundColor = "black";
    navSection.style.padding = "2.5rem";
    nav.style.position = "fixed";
    wrapper.style.width = "100%";
  } else {
    resetStyle();
  }
});

function resetStyle() {
  menu.src = "./assets/images/icon-hamburger.svg";
  menu.width = "24";
  menu.height = "16";
  header.style.paddingTop = "2.5rem";
  logo.style.marginRight = "0";
  navList.removeAttribute("style");
  navList.ariaHidden = "true";
  navList.ariaExpanded = "false";
  navSection.style.backgroundColor = "transparent";
  navSection.style.padding = "0";
  nav.style.position = "static";
  wrapper.style.width = "85%";
}

function resetStyleOnWindowSize() {
  const w = window.innerWidth;
  if (w >= 640) {
    resetStyle();
  }
}

window.addEventListener("resize", resetStyleOnWindowSize);

window.onload = function () {
  const w = window.innerWidth;
  if (w >= 640) {
    navList.ariaHidden = "false";
    navList.ariaExpanded = "true";
  }
};
