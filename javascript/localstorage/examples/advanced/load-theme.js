// ======================================
// LOAD SAVED THEME
// ======================================

// Get saved theme
const darkMode = JSON.parse(localStorage.getItem("darkMode"));

// Apply theme
if (darkMode) {
  document.body.classList.add("dark-mode");
}
