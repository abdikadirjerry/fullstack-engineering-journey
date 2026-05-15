// ======================================
// CHALLENGE 2
// TODO APP WITH DELETE FEATURE
// ======================================

// Tasks array
const tasks = ["Study JavaScript", "Practice DOM"];

// DOM elements
const list = document.getElementById("todo-list");

const input = document.getElementById("task-input");

const button = document.getElementById("add-btn");

// Render tasks
function renderTasks() {
  // Clear old UI
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    // Create task item
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

// Initial render
renderTasks();

// Add task
button.addEventListener("click", () => {
  const value = input.value.trim();

  if (value === "") {
    return;
  }

  tasks.push(value);

  renderTasks();

  input.value = "";
});
