// ======================================
// DARK MODE SAVER
// ======================================

// DOM button
const button = document.getElementById("theme-btn");

// Load saved theme
const darkMode = JSON.parse(localStorage.getItem("darkMode"));

// Apply saved theme
if (darkMode) {
  document.body.classList.add("dark-mode");
}

// Toggle theme
button.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Save theme state
  const isDarkMode = document.body.classList.contains("dark-mode");

  localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
});
