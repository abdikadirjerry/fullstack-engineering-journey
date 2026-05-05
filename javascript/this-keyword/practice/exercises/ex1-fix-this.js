/**
 * EXERCISE 1: Fixing Lost Context
 * Problem: The function 'fn' is called without context, so 'this' is lost.
 */

const user = {
  name: "Najio",
  greet() {
    console.log("Hello " + this.name);
  },
};

const fn = user.greet;

// ❓ Fix the problem so it prints "Hello Najio"
// SOLUTION: Use .bind() to lock the context to 'user'
const fixedFn = fn.bind(user);
fixedFn();
