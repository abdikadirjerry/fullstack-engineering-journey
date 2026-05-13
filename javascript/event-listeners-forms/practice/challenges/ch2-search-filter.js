// ======================================
// CHALLENGE 2
// ❓ Build live search filter
// for list items.
// LIVE SEARCH FILTER
// ======================================

// Select elements
const searchInput = document.getElementById("search");
const listItems = document.querySelectorAll(".item");

// Filter items while typing
searchInput.addEventListener("input", (event) => {
  // Get search value
  const searchValue = event.target.value.toLowerCase();

  // Loop through items
  listItems.forEach((item) => {
    const itemText = item.textContent.toLowerCase();

    // Match text
    const isMatch = itemText.includes(searchValue);

    // Toggle visibility
    item.style.display = isMatch ? "list-item" : "none";
  });
});
