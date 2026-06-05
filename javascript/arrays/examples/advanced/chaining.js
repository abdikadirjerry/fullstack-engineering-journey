const products = [
  {
    name: "Laptop",
    price: 800,
  },

  {
    name: "Mouse",
    price: 25,
  },

  {
    name: "Keyboard",
    price: 50,
  },
];

const expensiveProducts = products
  .filter((product) => product.price >= 50)
  .map((product) => product.name);

console.log(expensiveProducts);
