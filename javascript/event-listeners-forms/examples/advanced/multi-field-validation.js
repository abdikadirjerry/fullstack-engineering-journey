// ======================================
// MULTI FIELD VALIDATION
// ======================================

// Select form
const registerForm = document.getElementById("register-form");

// Listen for submit
registerForm.addEventListener("submit", (event) => {
  // Prevent page refresh
  event.preventDefault();

  // Select inputs
  const usernameInput = document.getElementById("username");
  const emailInput = document.getElementById("email");

  // Get values
  const username = usernameInput.value.trim();
  const email = emailInput.value.trim();

  // Validate fields
  if (username === "" || email === "") {
    console.log("All fields are required");
    return;
  }

  console.log("Form validated successfully!");
});
