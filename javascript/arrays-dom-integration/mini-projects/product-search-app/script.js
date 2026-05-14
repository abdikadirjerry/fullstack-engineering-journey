// ======================================
// PRODUCT SEARCH APP
// ======================================

// Product data
const products = [
  "Laptop",
  "Phone",
  "Keyboard",
  "Mouse",
  "Monitor",
  "Tablet",
  "Speaker",
];

// DOM elements
const searchInput = document.getElementById("search-input");

const productList = document.getElementById("product-list");

// ======================================
// RENDER PRODUCTS
// ======================================

function renderProducts(items) {
  // Clear old products
  productList.innerHTML = "";

  // Render updated products
  items.forEach((product) => {
    const li = document.createElement("li");

    li.innerText = product;

    productList.appendChild(li);
  });
}

// Initial render
renderProducts(products);

// ======================================
// SEARCH EVENT
// ======================================

searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase().trim();

  // Filter matching products
  const filteredProducts = products.filter((product) =>
    product.toLowerCase().includes(value),
  );

  renderProducts(filteredProducts);
});
