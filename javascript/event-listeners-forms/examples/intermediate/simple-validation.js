// ======================================
// ELEMENT SELECTION
// ======================================

const emailInput = document.getElementById("email");

const submitButton = document.getElementById("submit-btn");

// ======================================
// VALIDATION
// ======================================

function validateEmail() {
  const emailValue = emailInput.value.trim();

  if (emailValue === "") {
    console.log("Email is required.");
    return;
  }

  console.log("Validation passed.");
}

submitButton.addEventListener("click", validateEmail);
// ======================================
// SIMPLE VALIDATION
// ======================================

// Select elements
const emailInput = document.getElementById("email");
const submitButton = document.getElementById("submit-btn");

// Validate input on button click
submitButton.addEventListener("click", () => {
  // Remove extra spaces
  const emailValue = emailInput.value.trim();

  // Check if input is empty
  if (emailValue === "") {
    console.log("Email is required");
    return;
  }

  console.log("Validation passed");
});
