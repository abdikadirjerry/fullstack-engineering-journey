// ======================================
// ELEMENT SELECTION
// ======================================

const searchInput = document.getElementById("search");

const listItems = document.querySelectorAll(".item");

// ======================================
// FILTER FUNCTION
// ======================================

function filterItems(event) {
  const searchValue = event.target.value.toLowerCase();

  listItems.forEach((item) => {
    const itemText = item.textContent.toLowerCase();

    item.style.display = itemText.includes(searchValue) ? "block" : "none";
  });
}

searchInput.addEventListener("input", filterItems);
// ======================================
// LIVE SEARCH FILTER
// ======================================

// Select elements
const searchInput = document.getElementById("search");
const items = document.querySelectorAll(".item");

// Listen for typing
searchInput.addEventListener("input", (event) => {
  // Convert search value to lowercase
  const searchValue = event.target.value.toLowerCase();

  // Loop through all items
  items.forEach((item) => {
    // Get item text
    const itemText = item.textContent.toLowerCase();

    // Show matching items
    if (itemText.includes(searchValue)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});
