const form = document.querySelector("form");
const modal = document.querySelector(".modal");
const selectedRating = document.querySelector(".selected-rating");
const closeModal = document.querySelector(".close-modal");

const toggleVisibility = (element, isVisible) => {
  element.style.visibility = isVisible ? "visible" : "hidden";
  element.style.opacity = isVisible ? "1" : "0";
  element.setAttribute("aria-hidden", !isVisible);
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const rating = document.querySelector("input[name='rating']:checked")?.value;

  selectedRating.textContent = rating;
  toggleVisibility(form, false);
  toggleVisibility(modal, true);
});

closeModal.addEventListener("click", () => {
  toggleVisibility(modal, false);
  toggleVisibility(form, true);
});
 
