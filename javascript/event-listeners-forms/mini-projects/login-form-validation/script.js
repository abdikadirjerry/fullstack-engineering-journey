// ======================================
// DOM ELEMENTS
// ======================================

const form = document.getElementById("login-form");

const email = document.getElementById("email");

const password = document.getElementById("password");

const message = document.getElementById("message");

// ======================================
// FORM SUBMIT EVENT
// ======================================

form.addEventListener("submit", (event) => {
  // Prevent page refresh
  event.preventDefault();

  // Get values
  const emailValue = email.value.trim();

  const passwordValue = password.value.trim();

  // Validation
  if (emailValue === "" || passwordValue === "") {
    message.innerText = "All fields are required.";

    return;
  }

  if (passwordValue.length < 6) {
    message.innerText = "Password must be at least 6 characters.";

    return;
  }

  // Success
  message.innerText = "Login successful!";
});
