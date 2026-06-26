function updateStatistics(notes) {
  document.getElementById("total-notes").textContent = notes.length;

  const linuxNotes = notes.filter((note) => note.category === "Linux").length;

  const webSecurityNotes = notes.filter(
    (note) => note.category === "Web Security",
  ).length;

  document.getElementById("linux-count").textContent = linuxNotes;

  document.getElementById("web-count").textContent = webSecurityNotes;
}
