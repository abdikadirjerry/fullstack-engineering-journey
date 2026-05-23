// ======================================
// EXERCISE 3
// PROMISE.ALL()
// ======================================

const html = Promise.resolve("HTML");

const css = Promise.resolve("CSS");

const js = Promise.resolve("JavaScript");

Promise.all([html, css, js]).then((results) => {
  console.log(results);
});
