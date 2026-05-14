// ======================================
// FILTER ARRAY
// ======================================

const products = ["Laptop", "Phone", "Tablet", "Keyboard"];

// Filter matching items
const filteredProducts = products.filter((product) =>
  product.includes("Phone"),
);

console.log(filteredProducts);
