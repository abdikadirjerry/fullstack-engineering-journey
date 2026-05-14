// ======================================
// LIVE SEARCH FILTER
// ======================================

const search = document.getElementById("search");

const products = ["Laptop", "Phone", "Keyboard", "Mouse"];

const list = document.getElementById("list");

// Render products
function renderProducts(items) {
  // Clear UI
  list.innerHTML = "";

  items.forEach((item) => {
    const li = document.createElement("li");

    li.innerText = item;

    list.appendChild(li);
  });
}

// Initial render
renderProducts(products);

// Search event
search.addEventListener("input", () => {
  const value = search.value.toLowerCase();

  const filtered = products.filter((product) =>
    product.toLowerCase().includes(value),
  );

  renderProducts(filtered);
});
