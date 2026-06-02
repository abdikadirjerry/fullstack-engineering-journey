let tasks = [];

function addTask(text) {
  tasks.push({
    id: Date.now(),
    text,
    completed: false,
  });

  renderTasks();
}

function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== id);

  renderTasks();
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

  renderTasks();
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

        <button
          onclick="
            toggleTask(${task.id})
          "
        >
          Complete
        </button>

        <button
          onclick="
            deleteTask(${task.id})
          "
        >
          Delete
        </button>

      </li>
    `;
  });
}
