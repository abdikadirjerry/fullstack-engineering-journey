import { Storage } from "./storage.js";

export function handleThemeToggle() {
  const toggle = document.getElementById("theme-toggle");
  const systemSettings = Storage.get("school-theme", "light");

  document.documentElement.setAttribute("data-theme", systemSettings);

  toggle.addEventListener("click", () => {
    const currentMode = document.documentElement.getAttribute("data-theme");
    const updatedMode = currentMode === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", updatedMode);
    Storage.set("school-theme", updatedMode);
  });
}
