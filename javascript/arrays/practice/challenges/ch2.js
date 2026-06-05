const products = [
  {
    name: "Laptop",
    price: 1000,
  },

  {
    name: "Mouse",
    price: 20,
  },

  {
    name: "Keyboard",
    price: 50,
  },
];

const expensiveProducts = products.filter((product) => product.price >= 50);

console.log(expensiveProducts);
