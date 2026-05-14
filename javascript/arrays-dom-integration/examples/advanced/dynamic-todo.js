// ======================================
// DYNAMIC TODO LIST
// ======================================

const tasks = ["Learn Arrays", "Learn DOM"];

const list = document.getElementById("todo-list");

// Render tasks
function renderTasks() {
  // Clear previous tasks
  list.innerHTML = "";

  tasks.forEach((task) => {
    const li = document.createElement("li");

    li.innerText = task;

    list.appendChild(li);
  });
}

// Initial render
renderTasks();
