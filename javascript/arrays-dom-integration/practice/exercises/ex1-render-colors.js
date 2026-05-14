// ======================================
// EXERCISE 1
// RENDER COLORS
// ======================================

// Array of colors
const colors = ["Red", "Blue", "Green", "Black"];

// Select list
const list = document.getElementById("colors-list");

// Render colors
colors.forEach((color) => {
  const li = document.createElement("li");

  li.innerText = color;

  list.appendChild(li);
});
