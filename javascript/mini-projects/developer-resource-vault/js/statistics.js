function updateStatistics(resources) {
  document.getElementById("total-resources").textContent = resources.length;

  document.getElementById("frontend-count").textContent = resources.filter(
    (resource) => resource.category === "Frontend",
  ).length;

  document.getElementById("cyber-count").textContent = resources.filter(
    (resource) => resource.category === "Cybersecurity",
  ).length;
}
