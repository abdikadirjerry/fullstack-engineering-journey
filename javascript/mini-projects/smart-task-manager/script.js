const form = document.getElementById("task-form");

const input = document.getElementById("task-input");

const taskList = document.getElementById("task-list");

let tasks = [];

function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    taskList.innerHTML += `
      <li>
        ${task}

        <button
          onclick="deleteTask(${index})"
        >
          Delete
        </button>

      </li>
    `;
  });
}

function deleteTask(index) {
  tasks.splice(index, 1);

  renderTasks();
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const task = input.value.trim();

  if (!task) return;

  tasks.push(task);

  renderTasks();

  input.value = "";
});
