// ======================================
// EXERCISE 2
// PROMISE CHAINING
// ======================================

const promise = Promise.resolve(5);

promise
  .then((number) => {
    return number * 2;
  })
  .then((result) => {
    console.log(result);
  });
