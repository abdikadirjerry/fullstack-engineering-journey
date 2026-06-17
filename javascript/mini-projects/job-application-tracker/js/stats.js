function updateStats(applications) {
  document.getElementById("total-applications").textContent =
    applications.length;

  document.getElementById("interviews").textContent = applications.filter(
    (item) => item.status === "Interview",
  ).length;

  document.getElementById("accepted").textContent = applications.filter(
    (item) => item.status === "Accepted",
  ).length;
}
