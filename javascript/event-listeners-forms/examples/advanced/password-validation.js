// ======================================
// PASSWORD VALIDATION
// ======================================

// Select password input
const passwordInput = document.getElementById("password");

// Validate while typing
passwordInput.addEventListener("input", (event) => {
  const passwordValue = event.target.value;

  // Check password length
  if (passwordValue.length < 6) {
    console.log("Password must be at least 6 characters");
  } else {
    console.log("Password is valid");
  }
});
