import { Storage } from "./storage.js";

export function handleThemeToggle() {
  const toggle = document.getElementById("theme-toggle");
  const currentTheme = Storage.get("kanban-theme", "light");

  document.documentElement.setAttribute("data-theme", currentTheme);

  toggle.addEventListener("click", () => {
    const mode = document.documentElement.getAttribute("data-theme");
    const newMode = mode === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", newMode);
    Storage.set("kanban-theme", newMode);
  });
}
