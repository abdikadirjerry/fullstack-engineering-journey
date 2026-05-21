// ======================================
// MULTIPLE TIMEOUTS
// ======================================

console.log("Start");

setTimeout(() => {
  console.log("First timeout");
}, 1000);

setTimeout(() => {
  console.log("Second timeout");
}, 2000);

setTimeout(() => {
  console.log("Third timeout");
}, 3000);

console.log("End");
