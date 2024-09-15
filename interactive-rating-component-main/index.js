const buttons = document.querySelectorAll(".rate");
const submit = document.getElementById("submit");
const title = document.getElementById("title");
const subTitle = document.getElementById("sub-title");
const finalRate = document.getElementById("final-rate");
const thanks = document.getElementsByTagName("img");

let data = null;
let selectedButton = null;

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    if (selectedButton) {
      selectedButton.classList.remove("selected");
    }
    button.classList.toggle("selected");
    selectedButton = button;
    data = button.dataset.value;
    console.log("Selected value:", data);
  });
});

submit.addEventListener("click", function () {
  if (data) {
    buttons.forEach(function (button) {
      button.classList.add("hidden");
      submit.classList.add("hidden");
      title.innerHTML = "Thank you!";
      title.style.textAlign = "center";
      subTitle.innerHTML =
        "We appreciate you taking the time to give a rating. If you ever need more";
      subTitle.style.textAlign = "center";
      finalRate.innerHTML = `You selected ${data} out of 5`;
      finalRate.classList.toggle("hidden");
      thanks[0].classList.add("hidden");
      thanks[1].classList.toggle("hidden");
    });
  } else {
    alert("Please select a number first");
  }
});
