// Handling any number of arguments using Rest and Reduce
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log("Total Sum:", sum(10, 20, 30)); // 60
