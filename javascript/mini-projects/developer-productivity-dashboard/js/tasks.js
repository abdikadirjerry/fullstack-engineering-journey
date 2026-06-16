const taskForm = document.getElementById("task-form");

const taskInput = document.getElementById("task-input");

const taskList = document.getElementById("task-list");

let tasks = loadTasks();

function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");

    if (task.completed) {
      li.classList.add("completed");
    }

    li.innerHTML = `
<span>${task.text}</span>

<div>

<button onclick="toggleTask(${index})">
✓
</button>

<button onclick="deleteTask(${index})">
🗑
</button>

</div>
`;

    taskList.appendChild(li);
  });

  updateStats(tasks);

  saveTasks(tasks);
}

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const text = taskInput.value.trim();

  if (!text) return;

  tasks.push({
    text,
    completed: false,
  });

  renderTasks();

  taskInput.value = "";
});

function deleteTask(index) {
  tasks.splice(index, 1);

  renderTasks();
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;

  renderTasks();
}

renderTasks();
