function saveTasks(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  return JSON.parse(localStorage.getItem("tasks")) || [];
}
