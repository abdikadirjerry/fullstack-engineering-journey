const taskForm = document.getElementById("task-form");

const taskInput = document.getElementById("task-input");

loadTasks();

renderTasks();

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const value = taskInput.value.trim();

  if (!value) return;

  addTask(value);

  taskInput.value = "";
});
