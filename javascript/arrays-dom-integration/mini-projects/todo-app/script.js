// ======================================
// TODO APP
// ======================================

const tasks = [];

const input = document.getElementById("task-input");

const button = document.getElementById("add-btn");

const list = document.getElementById("todo-list");

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

    const deleteButton = document.createElement("button");

    deleteButton.innerText = "Delete";

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

  // Validation
  if (value === "") {
    alert("Task cannot be empty");
    return;
  }

  tasks.push(value);

  renderTasks();

  input.value = "";
});
