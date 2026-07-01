import { handleThemeToggle } from "./theme.js";
import { addStudent } from "./students.js";
import { renderRoster } from "./dom.js";

document.addEventListener("DOMContentLoaded", () => {
  // Initialize UI
  handleThemeToggle();
  renderRoster();

  // Form Handling
  const form = document.getElementById("student-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameInput = document.getElementById("student-name");
    const courseInput = document.getElementById("student-course");
    const gradeInput = document.getElementById("student-grade");

    // Execute core logical insert
    addStudent(
      nameInput.value.trim(),
      courseInput.value.trim(),
      gradeInput.value.trim(),
    );

    // Reset inputs and update UI
    form.reset();
    nameInput.focus();
    renderRoster();
  });
});
