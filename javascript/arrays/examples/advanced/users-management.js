const products = [
  {
    id: 1,
    name: "Laptop",
    price: 1200,
  },

  {
    id: 2,
    name: "Mouse",
    price: 25,
  },

  {
    id: 3,
    name: "Keyboard",
    price: 80,
  },

  {
    id: 4,
    name: "Monitor",
    price: 300,
  },
];

const expensiveProducts = products.filter((product) => product.price >= 100);

const affordableProducts = products.filter((product) => product.price < 100);

console.log("Expensive Products:");

console.log(expensiveProducts);

console.log("Affordable Products:");

console.log(affordableProducts);
