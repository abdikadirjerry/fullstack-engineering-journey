// ======================================
// EXERCISE 3
// RENDER PRODUCTS
// ======================================

// Product array
const products = ["Laptop", "Phone", "Tablet"];

// Select container
const container = document.getElementById("products");

// Render products
products.forEach((product) => {
  const card = document.createElement("div");

  card.innerText = product;

  container.appendChild(card);
});
