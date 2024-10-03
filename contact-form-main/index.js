const success = document.getElementById("success");
const button = document.querySelector("button");

// Inputs
const firstNameField = document.getElementById("fname");
const lastNameField = document.getElementById("lname");
const emailField = document.getElementById("email");
const generalQueryField = document.getElementById("general-enquiry");
const supportQueryField = document.getElementById("support-request");
const messageField = document.getElementById("message");
const consentField = document.getElementById("consent");

const inputs = {
  fname: firstNameField,
  lname: lastNameField,
  email: emailField,
  firstQuery: generalQueryField,
  secondQuery: supportQueryField,
  message: messageField,
  consent: consentField,
};

// Error messages
const fnameError = document.getElementById("fname-error");
const lnameError = document.getElementById("lname-error");
const emailError = document.getElementById("email-error");
const queryError = document.getElementById("query-error");
const messageError = document.getElementById("message-error");
const checkboxError = document.getElementById("checkbox-error");

const errors = {
  fname: fnameError,
  lname: lnameError,
  email: emailError,
  query: queryError,
  message: messageError,
  consent: checkboxError,
};

button.addEventListener("click", validate);

function validate(e) {
  e.preventDefault();
  let isValid = true;

  hideAllErrors();

  if (!firstNameField.value.trim()) {
    isValid = false;
    errors.fname.style.display = "block";
    inputs.fname.style.border = "1px solid var(--red)";
  }

  if (!lastNameField.value.trim()) {
    isValid = false;
    errors.lname.style.display = "block";
    inputs.lname.style.border = "1px solid var(--red)";
  }

  if (!validateEmail(emailField.value)) {
    isValid = false;
    errors.email.style.display = "block";
    inputs.email.style.border = "1px solid var(--red)";
  }

  if (!generalQueryField.checked && !supportQueryField.checked) {
    isValid = false;
    errors.query.style.display = "block";
  }

  if (!messageField.value.trim()) {
    isValid = false;
    errors.message.style.display = "block";
    inputs.message.style.border = "1px solid var(--red)";
  }

  if (!consentField.checked) {
    isValid = false;
    errors.consent.style.display = "block";
  }

  if (isValid) {
    success.classList.remove("hidden");
    setTimeout(function () {
      location.reload();
    }, 1000);
  }
}

function hideAllErrors() {
  Object.values(errors).forEach((error) => {
    error.style.display = "none";
  });
  Object.values(inputs).forEach((input) => {
    input.style.border = "1px solid var(--grey-500)";
  });
}

function validateEmail(email) {
  const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return re.test(String(email).toLowerCase());
}
