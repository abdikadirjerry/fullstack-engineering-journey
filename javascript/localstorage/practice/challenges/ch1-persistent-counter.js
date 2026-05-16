// ======================================
// CHALLENGE 1
// PERSISTENT COUNTER
// ======================================

// Get saved count
let count = Number(localStorage.getItem("count")) || 0;

// DOM element
const countElement = document.getElementById("count");

// Render count
function renderCount() {
  countElement.innerText = count;
}

// Initial render
renderCount();

// Increase counter
document.getElementById("increase").addEventListener("click", () => {
  count++;

  // Save count
  localStorage.setItem("count", count);

  renderCount();
});
