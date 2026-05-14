// ======================================
// RENDER ARRAY ITEMS
// ======================================

// Array of technologies
const technologies = ["HTML", "CSS", "JavaScript"];

// Select list element
const list = document.getElementById("list");

// Render items
technologies.forEach((technology) => {
  // Create list item
  const li = document.createElement("li");

  // Add text
  li.innerText = technology;

  // Append to DOM
  list.appendChild(li);
});
