// ======================================
// PROMISE.RACE()
// ======================================

const fastPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Fast Promise");
  }, 1000);
});

const slowPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Slow Promise");
  }, 3000);
});

Promise.race([fastPromise, slowPromise]).then((result) => {
  console.log(result);
});
