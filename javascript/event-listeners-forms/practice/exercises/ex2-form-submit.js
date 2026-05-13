// ======================================
// EXERCISE 2
// ❓ Prevent form refresh
// and print form values.
// FORM SUBMIT
// ======================================

// Select form and inputs
const form = document.getElementById("user-form");

const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");

// Handle form submit
form.addEventListener("submit", (event) => {
  // Prevent page refresh
  event.preventDefault();

  // Get values
  const username = usernameInput.value.trim();
  const email = emailInput.value.trim();

  // Print values
  console.log("Username:", username);
  console.log("Email:", email);
});
