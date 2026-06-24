const STORAGE_KEY = "developer_snippets";

function getSnippets() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

function saveSnippets(snippets) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(snippets));
}
