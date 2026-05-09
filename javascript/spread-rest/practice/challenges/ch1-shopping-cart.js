const cart = [
  { name: "Laptop", price: 500 },
  { name: "Phone", price: 300 },
];

// ❓ Add new item using spread operator (Immutable update)
const newItem = { name: "Mouse", price: 25 };
const updatedCart = [...cart, newItem];

console.log("Updated Cart:", updatedCart);
