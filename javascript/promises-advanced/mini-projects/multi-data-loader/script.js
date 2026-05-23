// ======================================
// MULTI DATA LOADER
// ======================================

const button = document.getElementById("load-btn");

const status = document.getElementById("status");

function fetchUsers() {
  return Promise.resolve("Users Loaded");
}

function fetchPosts() {
  return Promise.resolve("Posts Loaded");
}

button.addEventListener("click", () => {
  status.innerText = "Loading data...";

  Promise.all([fetchUsers(), fetchPosts()]).then((results) => {
    status.innerText = results.join(" | ");
  });
});
