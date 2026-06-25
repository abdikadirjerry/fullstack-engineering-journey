const STORAGE_KEY = "bug_reports";

function getBugs() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

function saveBugs(bugs) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(bugs));
}
