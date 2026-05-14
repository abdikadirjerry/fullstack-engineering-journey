// ======================================
// CHALLENGE 1
// LIVE SEARCH
// ======================================

// Products array
const products = ["Laptop", "Phone", "Keyboard", "Monitor"];

// DOM elements
const search = document.getElementById("search");

const list = document.getElementById("list");

// Render products
function renderProducts(items) {
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

  const filteredProducts = products.filter((product) =>
    product.toLowerCase().includes(value),
  );

  renderProducts(filteredProducts);
});
