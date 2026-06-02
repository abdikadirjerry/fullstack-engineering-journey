function saveTasks() {
  localStorage.setItem("devtracker_tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const savedTasks = localStorage.getItem("devtracker_tasks");

  if (savedTasks) {
    tasks = JSON.parse(savedTasks);
  }
}
