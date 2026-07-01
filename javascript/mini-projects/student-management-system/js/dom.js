import { getStudents, deleteStudent, getStudentCount } from "./students.js";

const studentList = document.getElementById("student-list");
const emptyState = document.getElementById("empty-state");
const studentCount = document.getElementById("student-count");

export function renderRoster() {
  const students = getStudents();
  studentList.innerHTML = "";
  studentCount.textContent = getStudentCount();

  if (students.length === 0) {
    emptyState.classList.remove("hidden");
    return;
  }

  emptyState.classList.add("hidden");

  students.forEach((student) => {
    const row = document.createElement("tr");

    row.innerHTML = `
            <td><strong>${escapeHTML(student.name)}</strong></td>
            <td>${escapeHTML(student.course)}</td>
            <td>${escapeHTML(student.grade)}</td>
            <td>
                <button class="btn-danger delete-btn" data-id="${student.id}">Delete</button>
            </td>
        `;

    studentList.appendChild(row);
  });

  attachDeleteListeners();
}

function attachDeleteListeners() {
  const deleteButtons = document.querySelectorAll(".delete-btn");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const id = e.target.getAttribute("data-id");
      deleteStudent(id);
      renderRoster(); // Re-render UI after deletion
    });
  });
}

// Utility to prevent XSS attacks when rendering user input
function escapeHTML(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}
