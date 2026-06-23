const STORAGE_KEY = "developer_resources";

function getResources() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

function saveResources(resources) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(resources));
}
