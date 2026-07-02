import { handleThemeToggle } from "./theme.js";
import { addStudent } from "./students.js";
import { renderRoster } from "./dom.js";
import { showToast } from "./toast.js";
import { exportToCSV } from "./export.js";

document.addEventListener("DOMContentLoaded", () => {
  handleThemeToggle();
  renderRoster();

  // Elements
  const form = document.getElementById("student-form");
  const searchInput = document.getElementById("search-input");
  const exportBtn = document.getElementById("export-btn");

  // FEATURE: Real-time Search Filtering
  searchInput.addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const rows = document.querySelectorAll("#student-list tr");

    rows.forEach((row) => {
      const rowText = row.textContent.toLowerCase();
      // Toggle display based on whether the row text contains the search term
      row.style.display = rowText.includes(searchTerm) ? "" : "none";
    });
  });

  // FEATURE: CSV Export
  exportBtn.addEventListener("click", () => {
    exportToCSV();
    showToast("Database exported successfully!");
  });

  // Form Submission Handling
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameInput = document.getElementById("student-name");
    const courseInput = document.getElementById("student-course");
    const gradeInput = document.getElementById("student-grade");

    // State update
    addStudent(
      nameInput.value.trim(),
      courseInput.value.trim(),
      gradeInput.value.trim(),
    );

    // UI Reset
    form.reset();
    nameInput.focus();
    renderRoster();

    // FEATURE: Fire Success Notification
    showToast(`Success! ${nameInput.value.trim()} is now enrolled.`);

    // Reset search field if it was active
    searchInput.value = "";
  });
});
