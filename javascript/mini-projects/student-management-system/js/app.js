import { handleThemeToggle } from "./theme.js";
import { addStudent, updateStudent } from "./students.js";
import { renderRoster } from "./dom.js";
import { showToast } from "./toast.js";
import { exportToCSV } from "./export.js";
import { initModalListeners, closeEditModal } from "./modal.js";

document.addEventListener("DOMContentLoaded", () => {
  handleThemeToggle();
  renderRoster();
  initModalListeners();

  const mainForm = document.getElementById("student-form");
  const editForm = document.getElementById("edit-form");
  const searchInput = document.getElementById("search-input");

  // Search Feature
  searchInput.addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase();
    document.querySelectorAll("#student-list tr").forEach((row) => {
      row.style.display = row.textContent.toLowerCase().includes(searchTerm)
        ? ""
        : "none";
    });
  });

  // Export Feature
  document.getElementById("export-btn").addEventListener("click", () => {
    exportToCSV();
    showToast("Database exported successfully!");
  });

  // Add New Student Pipeline
  mainForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("student-name").value.trim();
    addStudent(
      name,
      document.getElementById("student-course").value.trim(),
      document.getElementById("student-grade").value.trim(),
    );
    mainForm.reset();
    renderRoster();
    showToast(`Success! ${name} is now enrolled.`);
  });

  // V3.0 UPGRADE: Edit Existing Student Pipeline
  editForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const id = document.getElementById("edit-id").value;
    const updatedName = document.getElementById("edit-name").value.trim();

    const success = updateStudent(id, {
      name: updatedName,
      course: document.getElementById("edit-course").value.trim(),
      grade: document.getElementById("edit-grade").value.trim(),
    });

    if (success) {
      closeEditModal();
      renderRoster();
      showToast(`${updatedName}'s record was updated.`);
    }
  });
});
