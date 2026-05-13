// ======================================
// DOM ELEMENTS
// ======================================

const search = document.getElementById("search");

const items = document.querySelectorAll(".item");

// ======================================
// FILTER ITEMS
// ======================================

search.addEventListener("input", () => {
  const value = search.value.toLowerCase();

  items.forEach((item) => {
    const text = item.innerText.toLowerCase();

    if (text.includes(value)) {
      item.style.display = "list-item";
    } else {
      item.style.display = "none";
    }
  });
});
