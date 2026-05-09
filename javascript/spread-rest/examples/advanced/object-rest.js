const user = { name: "Najio", age: 20, country: "Somalia" };

// Extracting 'name', while collecting 'age' and 'country' into 'details'
const { name, ...details } = user;

console.log("Name:", name);
console.log("Details Object:", details);
