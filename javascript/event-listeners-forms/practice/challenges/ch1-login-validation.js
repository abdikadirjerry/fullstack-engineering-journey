// ======================================
// CHALLENGE 1
// ❓ Build login validation:
// - email required
// - password required
// - prevent refresh
// LOGIN VALIDATION
// ======================================

// Select elements
const loginForm = document.getElementById("login-form");

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const message = document.getElementById("message");

// Handle form submit
loginForm.addEventListener("submit", (event) => {
  // Prevent page refresh
  event.preventDefault();

  // Get values
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  // Validate email
  if (email === "") {
    message.textContent = "Email is required";
    return;
  }

  // Validate password
  if (password === "") {
    message.textContent = "Password is required";
    return;
  }

  // Success message
  message.textContent = "Login successful!";
});
