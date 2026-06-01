const form = document.getElementById("task-form");

const input = document.getElementById("task-input");

const taskList = document.getElementById("task-list");

const searchInput = document.getElementById("search-input");

const totalTasks = document.getElementById("total-tasks");

const completedTasks = document.getElementById("completed-tasks");

const quote = document.getElementById("quote");

const quoteBtn = document.getElementById("quote-btn");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function updateStats() {
  totalTasks.innerText = `Total Tasks: ${tasks.length}`;

  const completed = tasks.filter((task) => task.completed).length;

  completedTasks.innerText = `Completed Tasks: ${completed}`;
}

function renderTasks(filteredTasks = tasks) {
  taskList.innerHTML = "";

  filteredTasks.forEach((task, index) => {
    taskList.innerHTML += `
        <li>

          <div>

            <strong
              style="
                text-decoration:
                ${task.completed ? "line-through" : "none"};
              "
            >
              ${task.text}
            </strong>

            <br>

            <small>
              Created:
              ${task.createdAt}
            </small>

          </div>

          <div>

            <button
              class="complete-btn"
              onclick="toggleTask(${index})"
            >
              ${task.completed ? "Undo" : "Complete"}
            </button>

            <button
              class="delete-btn"
              onclick="deleteTask(${index})"
            >
              Delete
            </button>

          </div>

        </li>
      `;
  });

  updateStats();
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
    createdAt: new Date().toLocaleDateString(),
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

async function loadQuote() {
  quote.innerText = "Loading quote...";

  try {
    const response = await fetch("https://dummyjson.com/quotes/random");

    const data = await response.json();

    quote.innerText = `"${data.quote}" — ${data.author}`;
  } catch {
    quote.innerText = "Failed to load quote.";
  }
}

quoteBtn.addEventListener("click", loadQuote);

renderTasks();
