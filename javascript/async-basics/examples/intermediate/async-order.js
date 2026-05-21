// ======================================
// ASYNC EXECUTION ORDER
// ======================================

console.log("Task 1");

setTimeout(() => {
  console.log("Task 2");
}, 1000);

console.log("Task 3");
