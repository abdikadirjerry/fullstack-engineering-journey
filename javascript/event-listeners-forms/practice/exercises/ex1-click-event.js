// ======================================
// EXERCISE 1
// ❓ Add click event to button
// and change heading text.
// CHANGE HEADING TEXT
// ======================================

// Select elements
const heading = document.getElementById("heading");
const button = document.getElementById("change-btn");

// Add click event
button.addEventListener("click", () => {
  heading.textContent = "Heading Changed Successfully!";
});
