const user = { name: "Najio" };

// Method 1: Object.assign
const copy1 = Object.assign({}, user);

// Method 2: Spread Operator (Most common)
const copy2 = { ...user };

console.log("Copy 1:", copy1);
console.log("Copy 2:", copy2);
