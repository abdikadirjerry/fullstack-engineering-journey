// ======================================
// PROMISE.ALL()
// ======================================

const promise1 = Promise.resolve("HTML");

const promise2 = Promise.resolve("CSS");

const promise3 = Promise.resolve("JavaScript");

Promise.all([promise1, promise2, promise3]).then((results) => {
  console.log(results);
});
