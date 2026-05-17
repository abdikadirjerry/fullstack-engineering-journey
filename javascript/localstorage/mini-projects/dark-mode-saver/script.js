// ======================================
// DARK MODE SAVER
// ======================================

// DOM elements
const button = document.getElementById("theme-btn");

const title = document.querySelector("h1");

// Load saved theme
const darkMode = JSON.parse(localStorage.getItem("darkMode"));

// Apply saved theme
if (darkMode) {
  document.body.classList.add("dark-mode");

  title.innerText = "Dark Mode Enabled";
}

// Toggle theme
button.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Check mode
  const isDarkMode = document.body.classList.contains("dark-mode");

  // Update title
  title.innerText = isDarkMode ? "Dark Mode Enabled" : "Dark Mode Disabled";

  // Save mode
  localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
});
