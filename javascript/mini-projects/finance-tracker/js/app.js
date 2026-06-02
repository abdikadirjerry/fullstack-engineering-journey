const taskForm = document.getElementById("task-form");

const taskInput = document.getElementById("task-input");

loadTasks();

renderTasks();

updateStats();

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const value = taskInput.value.trim();

  if (!value) return;

  addTask(value);

  taskInput.value = "";
});

/* ==========================
   PROJECT TRACKER
========================== */

const projectForm = document.getElementById("project-form");

const projectInput = document.getElementById("project-input");

projectForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const value = projectInput.value.trim();

  if (!value) return;

  addProject(value);

  projectInput.value = "";
});
