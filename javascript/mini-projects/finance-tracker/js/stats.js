function updateStats() {
  const total = tasks.length;

  const completed = tasks.filter((task) => task.completed).length;

  const rate = total === 0 ? 0 : Math.round((completed / total) * 100);

  document.getElementById("total-tasks").innerText = total;

  document.getElementById("completed-tasks").innerText = completed;

  document.getElementById("completion-rate").innerText = `${rate}%`;
}
