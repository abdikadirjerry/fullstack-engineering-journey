// ======================================
// SAVE THEME PREFERENCE
// ======================================

const themeButton = document.getElementById("theme-btn");

// Toggle theme
themeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Check current theme
  const isDarkMode = document.body.classList.contains("dark-mode");

  // Save theme
  localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
});
