// ======================================
// TODO APP
// ======================================

// Tasks array
const tasks = [];

// DOM elements
const input = document.getElementById("task-input");

const button = document.getElementById("add-btn");

const list = document.getElementById("todo-list");

// ======================================
// RENDER TASKS
// ======================================

function renderTasks() {
  // Clear old tasks
  list.innerHTML = "";

  // Render updated tasks
  tasks.forEach((task, index) => {
    // Create list item
    const li = document.createElement("li");

    li.innerText = task;

    // Create delete button
    const deleteButton = document.createElement("button");

    deleteButton.innerText = "Delete";

    // Delete event
    deleteButton.addEventListener("click", () => {
      tasks.splice(index, 1);

      renderTasks();
    });

    li.appendChild(deleteButton);

    list.appendChild(li);
  });
}

// ======================================
// ADD TASK EVENT
// ======================================

button.addEventListener("click", () => {
  // Get input value
  const value = input.value.trim();

  // Prevent empty tasks
  if (value === "") {
    return;
  }

  // Add task
  tasks.push(value);

  // Re-render UI
  renderTasks();

  // Clear input
  input.value = "";
});
