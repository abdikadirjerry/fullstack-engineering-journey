const product = { title: "Laptop", price: 500 };

// keyName: newVariableName
const { title: productTitle, price: productPrice } = product;

console.log(productTitle); // "Laptop"
