function saveApplications(data) {
  localStorage.setItem("applications", JSON.stringify(data));
}

function loadApplications() {
  return JSON.parse(localStorage.getItem("applications")) || [];
}
