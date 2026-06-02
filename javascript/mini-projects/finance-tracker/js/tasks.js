let tasks = [];

function addTask(text) {
  tasks.push({
    id: Date.now(),
    text,
    completed: false,
  });

  saveTasks();

  renderTasks();

  updateStats();
}

function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== id);

  saveTasks();

  renderTasks();

  updateStats();
}

function toggleTask(id) {
  tasks = tasks.map((task) => {
    if (task.id === id) {
      return {
        ...task,
        completed: !task.completed,
      };
    }

    return task;
  });

  saveTasks();

  renderTasks();

  updateStats();
}

function renderTasks() {
  const taskList = document.getElementById("task-list");

  taskList.innerHTML = "";

  tasks.forEach((task) => {
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

        <div>

          <button
            onclick="
              toggleTask(${task.id})
            "
          >
            ${task.completed ? "Undo" : "Complete"}
          </button>

          <button
            onclick="
              deleteTask(${task.id})
            "
          >
            Delete
          </button>

        </div>

      </li>
    `;
  });
}
