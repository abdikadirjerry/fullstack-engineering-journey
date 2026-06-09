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

for (let index = 0; index < products.length; index++) {
  totalPrice += products[index].price;
}

console.log(totalPrice);
