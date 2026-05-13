// ======================================
// FORM SUBMIT EVENT
// ======================================

// Select form
const loginForm = document.getElementById("login-form");

// Listen for form submission
loginForm.addEventListener("submit", (event) => {
  // Prevent page refresh
  event.preventDefault();

  console.log("Form submitted successfully!");
});
