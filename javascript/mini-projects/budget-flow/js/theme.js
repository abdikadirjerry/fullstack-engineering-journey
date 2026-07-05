// Handles UI theme switching
const ThemeManager = {
  init() {
    const isDark = StorageUtil.getData("darkMode") === true;
    if (isDark) document.body.classList.add("dark-mode");
  },
  toggle() {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    StorageUtil.saveData("darkMode", isDark);
  },
};
