import { handleThemeToggle } from "./theme.js";
import { addTask, getTasks, deleteTask } from "./state.js";
import { initDragAndDrop } from "./drag.js";

document.addEventListener("DOMContentLoaded", () => {
  handleThemeToggle();
  renderBoard();

  const form = document.getElementById("task-form");
  const input = document.getElementById("task-input");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = input.value.trim();

    if (text) {
      addTask(text);
      input.value = "";
      renderBoard();
    }
  });
});

// We export this so drag.js can trigger a re-render after a drop event
export function renderBoard() {
  const tasks = getTasks();

  // Clear all columns
  const columns = {
    todo: document.getElementById("todo"),
    doing: document.getElementById("doing"),
    done: document.getElementById("done"),
  };

  Object.values(columns).forEach((col) => (col.innerHTML = ""));

  // Track counts
  const counts = { todo: 0, doing: 0, done: 0 };

  // Generate physical cards
  tasks.forEach((task) => {
    const card = document.createElement("div");
    card.className = "task-card";
    card.setAttribute("draggable", "true"); // Critical for Drag API
    card.id = task.id;

    card.innerHTML = `
            <span>${escapeHTML(task.text)}</span>
            <button class="delete-btn" data-id="${task.id}">✕</button>
        `;

    // Append to the correct column based on status
    columns[task.status].appendChild(card);
    counts[task.status]++;
  });

  // Update Badges
  document.getElementById("todo-count").textContent = counts.todo;
  document.getElementById("doing-count").textContent = counts.doing;
  document.getElementById("done-count").textContent = counts.done;

  // Re-initialize listeners for the newly created DOM elements
  initDragAndDrop();
  attachDeleteListeners();
}

function attachDeleteListeners() {
  document.querySelectorAll(".delete-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = e.target.getAttribute("data-id");
      deleteTask(id);
      renderBoard();
    });
  });
}

function escapeHTML(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}
