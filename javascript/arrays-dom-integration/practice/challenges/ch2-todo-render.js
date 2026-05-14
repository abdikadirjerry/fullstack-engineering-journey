// ======================================
// CHALLENGE 2
// TODO RENDER APP
// ======================================

// Tasks array
const tasks = ["Study JavaScript", "Build Projects", "Practice DOM"];

// DOM elements
const list = document.getElementById("todo-list");

const input = document.getElementById("task-input");

const button = document.getElementById("add-btn");

// Render tasks
function renderTasks() {
  // Clear UI
  list.innerHTML = "";

  tasks.forEach((task) => {
    const li = document.createElement("li");

    li.innerText = task;

    list.appendChild(li);
  });
}

// Initial render
renderTasks();

// Add task event
button.addEventListener("click", () => {
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
