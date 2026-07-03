import { getStudents, deleteStudent, getStudentById } from "./students.js";
import { openEditModal } from "./modal.js";
import { showToast } from "./toast.js";

const studentList = document.getElementById("student-list");
const emptyState = document.getElementById("empty-state");
const studentCount = document.getElementById("student-count");

export function renderRoster() {
  const students = getStudents();
  studentList.innerHTML = "";
  studentCount.textContent = students.length;

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
            <td style="display: flex; gap: 8px;">
                <button class="btn-warning edit-btn" data-id="${student.id}">Edit</button>
                <button class="btn-danger delete-btn" data-id="${student.id}">Delete</button>
            </td>
        `;
    studentList.appendChild(row);
  });

  attachRowListeners();
}

function attachRowListeners() {
  // Attach Delete Listeners
  document.querySelectorAll(".delete-btn").forEach((button) => {
    button.addEventListener("click", (e) => {
      const id = e.target.getAttribute("data-id");
      deleteStudent(id);
      renderRoster();
      showToast("Student record deleted.", "error");
    });
  });

  // Attach Edit Listeners
  document.querySelectorAll(".edit-btn").forEach((button) => {
    button.addEventListener("click", (e) => {
      const id = e.target.getAttribute("data-id");
      const studentData = getStudentById(id);
      if (studentData) {
        openEditModal(studentData);
      }
    });
  });
}

function escapeHTML(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}
