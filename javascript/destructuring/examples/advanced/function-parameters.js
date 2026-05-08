// Destructuring right in the parameter list
function displayUser({ name, age, country = "Somalia" }) {
  console.log(`${name} is ${age} years old from ${country}`);
}

displayUser({ name: "Najio", age: 20 });
