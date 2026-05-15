// ======================================
// EXERCISE 3
// RENDER PRODUCT CARDS
// ======================================

// Product array
const products = ["Laptop", "Phone", "Tablet", "Keyboard"];

// DOM container
const container = document.getElementById("products");

// Render products
products.forEach((product) => {
  // Create card
  const card = document.createElement("div");

  // Add class
  card.classList.add("product-card");

  // Add content
  card.innerHTML = `
    <h3>${product}</h3>
    <p>Available in stock</p>
  `;

  // Append to UI
  container.appendChild(card);
});
