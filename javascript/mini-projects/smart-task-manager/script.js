const form = document.getElementById("task-form");

const input = document.getElementById("task-input");

const taskList = document.getElementById("task-list");

const searchInput = document.getElementById("search-input");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks(filteredTasks = tasks) {
  taskList.innerHTML = "";

  filteredTasks.forEach((task, index) => {
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

  saveTasks();

  renderTasks();
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;

  saveTasks();

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

  saveTasks();

  renderTasks();

  input.value = "";
});

searchInput.addEventListener("input", (event) => {
  const keyword = event.target.value.toLowerCase();

  const filteredTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(keyword),
  );

  renderTasks(filteredTasks);
});

renderTasks();
