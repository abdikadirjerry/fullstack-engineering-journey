// ======================================
// EXERCISE 2
// FILTER EVEN & ODD NUMBERS
// ======================================

// Numbers array
const numbers = [10, 15, 20, 25, 30, 35];

// Filter even numbers
const evenNumbers = numbers.filter((number) => number % 2 === 0);

// Filter odd numbers
const oddNumbers = numbers.filter((number) => number % 2 !== 0);

// Output results
console.log("Even Numbers:");
console.log(evenNumbers);

console.log("Odd Numbers:");
console.log(oddNumbers);
