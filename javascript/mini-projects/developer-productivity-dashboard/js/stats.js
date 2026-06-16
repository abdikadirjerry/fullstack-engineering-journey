function updateStats(tasks) {
  const total = tasks.length;

  const completed = tasks.filter((task) => task.completed).length;

  const pending = total - completed;

  document.getElementById("total-tasks").textContent = total;

  document.getElementById("completed-tasks").textContent = completed;

  document.getElementById("pending-tasks").textContent = pending;
}
