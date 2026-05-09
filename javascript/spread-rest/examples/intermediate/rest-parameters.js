// Collecting 'numbers' into an array using Rest
function multiply(multiplier, ...numbers) {
  return numbers.map((num) => num * multiplier);
}

console.log(multiply(2, 1, 2, 3)); // [2, 4, 6]
