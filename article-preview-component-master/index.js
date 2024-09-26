const button = document.getElementById("share-btn1");
const buttonTwo = document.getElementById("share-btn2");
const profile = document.querySelector(".furniture__profile-section");
const socials = document.querySelector(".socials");
var w = window.innerWidth;

window.onresize = window.onload = function () {
  w = this.innerWidth;
  socials.classList.add("hidden");
  profile.classList.remove("hidden");
  buttonTwo.classList.remove("hidden");
};

button.addEventListener("click", toggle);
buttonTwo.addEventListener("click", toggle);

function toggle() {
  if (w <= 1039) {
    profile.classList.toggle("hidden");
    socials.classList.toggle("hidden");
  } else {
    socials.classList.toggle("hidden");
    buttonTwo.classList.toggle("hidden");
  }
}
