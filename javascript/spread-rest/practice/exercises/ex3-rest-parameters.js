// ❓ Create function using rest parameters to find the max number
function findMax(...vals) {
  return Math.max(...vals); // Using spread to pass the rest array to Math.max
}

console.log("Max Value:", findMax(10, 55, 2, 89, 21));
