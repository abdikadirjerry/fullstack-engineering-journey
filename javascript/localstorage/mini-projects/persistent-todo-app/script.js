// ======================================
// PERSISTENT TODO APP
// ======================================

// Get saved tasks
const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// DOM elements
const input = document.getElementById("task-input");

const button = document.getElementById("add-btn");

const list = document.getElementById("task-list");

// Save tasks
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Render tasks
function renderTasks() {
  list.innerHTML = "";

  // Empty state
  if (tasks.length === 0) {
    list.innerHTML = "<li>No tasks available</li>";

    return;
  }

  tasks.forEach((task, index) => {
    const li = document.createElement("li");

    li.innerText = task;

    // Delete button
    const deleteButton = document.createElement("button");

    deleteButton.innerText = "Delete";

    deleteButton.addEventListener("click", () => {
      tasks.splice(index, 1);

      saveTasks();

      renderTasks();
    });

    li.appendChild(deleteButton);

    list.appendChild(li);
  });
}

// Initial render
renderTasks();

// Add task
button.addEventListener("click", () => {
  const value = input.value.trim();

  // Validation
  if (value === "") {
    return;
  }

  tasks.push(value);

  saveTasks();

  renderTasks();

  input.value = "";
});
