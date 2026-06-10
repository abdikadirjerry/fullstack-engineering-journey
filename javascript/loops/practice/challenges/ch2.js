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

let totalPrice = 0;

for (const product of products) {
  totalPrice += product.price;
}

console.log(totalPrice);
