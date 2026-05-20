// ======================================
// SIMPLE LOADER SIMULATION
// ======================================

// DOM elements
const button = document.getElementById("load-btn");

const statusText = document.getElementById("status");

// Loader function
function loadData(callback) {
  statusText.innerText = "Loading...";

  setTimeout(() => {
    callback();
  }, 3000);
}

// Callback function
function dataLoaded() {
  statusText.innerText = "Data loaded successfully";
}

// Button event
button.addEventListener("click", () => {
  loadData(dataLoaded);
});
