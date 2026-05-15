// ======================================
// EXERCISE 1
// RENDER COLORS WITH STYLING
// ======================================

// Colors array
const colors = ["Red", "Blue", "Green", "Black", "Purple"];

// Select DOM list
const list = document.getElementById("colors-list");

// Render colors
colors.forEach((color) => {
  // Create list item
  const li = document.createElement("li");

  // Add text
  li.innerText = color;

  // Dynamic color styling
  li.style.color = color.toLowerCase();

  // Append item
  list.appendChild(li);
});
