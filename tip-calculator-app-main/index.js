const inputs = document.querySelectorAll("input");
const buttons = document.querySelectorAll("button");
const invalid = document.querySelectorAll("span");
const tip = document.getElementById("tip-per-person");
const total = document.getElementById("total-per-person");
let value;
let inputType;
var bill = 0;
let customTip;
let numberOfPeople;
let tipPerPerson;
let totalPerPerson;

inputs.forEach((input) => input.addEventListener("keyup", handleInput));

buttons.forEach((button) =>
  button.addEventListener("click", (e) => {
    e.preventDefault();
    customTip = e.target.dataset.value;
    if (customTip === "reset") {
      tip.innerHTML = "$0.00";
      total.innerHTML = "$0.00";
      inputs.forEach((input) => (input.value = ""));
    } else {
      tipPerPerson = divide(bill, divide(100, customTip));
      totalPerPerson = plus(bill, tipPerPerson);
      tip.innerHTML = "$" + tipPerPerson.toFixed(2);
      total.innerHTML = "$" + totalPerPerson.toFixed(2);
    }
  })
);

function handleInput(e) {
  value = parseFloat(e.target.value);
  inputType = e.target.id;

  switch (inputType) {
    case "bill":
      bill = value;
      if (bill > 0) {
        total.innerHTML = "$" + bill.toFixed(2);
        invalid[0].classList.add("hidden");
      } else {
        invalid[0].classList.remove("hidden");
        total.innerHTML = "$0.00";
      }
      break;

    case "custom":
      customTip = value;
      tipPerPerson = divide(bill, divide(100, customTip));
      totalPerPerson = plus(bill, tipPerPerson);
      tip.innerHTML = "$" + tipPerPerson.toFixed(2);
      total.innerHTML = "$" + totalPerPerson.toFixed(2);
      break;

    case "people":
      numberOfPeople = value;
      if (numberOfPeople <= 0) {
        invalid[1].classList.remove("hidden");
      } else {
        tip.innerHTML = "$" + divide(tipPerPerson, numberOfPeople).toFixed(2);
        total.innerHTML = divide(totalPerPerson, numberOfPeople).toFixed(2);
        invalid[1].classList.add("hidden");
      }
      break;

    default:
      break;
  }
}

function divide(x, y) {
  return y ? x / y : 0;
}

function plus(x, y) {
  return x + y;
}
