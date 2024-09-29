const form = document.getElementById("form");
const success = document.getElementById("success");
const invalid = document.getElementById("invalid");
const input = document.getElementById("email");
const user = document.getElementById("user-email");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const email = input.value;
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (emailRegex.test(email)) {
    form.classList.toggle("hidden");
    success.classList.toggle("hidden");
    invalid.classList.add("hidden");
    user.innerHTML = email;
  } else {
    invalid.classList.remove("hidden");
    input.style.backgroundColor = "rgb(255, 232, 230)";
    input.style.color = "hsl(4, 100%, 67%)";
  }
});
