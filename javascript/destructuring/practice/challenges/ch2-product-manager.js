const products = [
  { title: "Laptop", price: 500 },
  { title: "Phone", price: 300 },
];

// ❓ Loop and destructure each product
console.log("--- Product Inventory ---");
products.forEach(({ title, price }) => {
  console.log(`Item: ${title} | Cost: $${price}`);
});
