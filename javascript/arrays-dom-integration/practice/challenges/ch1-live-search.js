// ======================================
// CHALLENGE 1
// LIVE SEARCH WITH EMPTY MESSAGE
// ======================================

const products = ["Laptop", "Phone", "Keyboard", "Monitor"];

const search = document.getElementById("search");

const list = document.getElementById("list");

// Render products
function renderProducts(items) {
  // Clear UI
  list.innerHTML = "";

  // Show empty state
  if (items.length === 0) {
    list.innerHTML = "<li>No products found</li>";

    return;
  }

  // Render items
  items.forEach((product) => {
    const li = document.createElement("li");

    li.innerText = product;

    list.appendChild(li);
  });
}

// Initial render
renderProducts(products);

// Search event
search.addEventListener("input", () => {
  const value = search.value.toLowerCase();

  const filteredProducts = products.filter((product) =>
    product.toLowerCase().includes(value),
  );

  renderProducts(filteredProducts);
});
