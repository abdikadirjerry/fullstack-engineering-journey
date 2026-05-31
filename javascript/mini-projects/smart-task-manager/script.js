const form = document.getElementById("task-form");

const input = document.getElementById("task-input");

const taskList = document.getElementById("task-list");

let tasks = [];

function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    taskList.innerHTML += `
      <li>

        <span
          style="
            text-decoration:
            ${task.completed ? "line-through" : "none"};
          "
        >
          ${task.text}
        </span>

        <button
          onclick="toggleTask(${index})"
        >
          ${task.completed ? "Undo" : "Complete"}
        </button>

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

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;

  renderTasks();
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const text = input.value.trim();

  if (!text) return;

  tasks.push({
    text,
    completed: false,
  });

  renderTasks();

  input.value = "";
});
