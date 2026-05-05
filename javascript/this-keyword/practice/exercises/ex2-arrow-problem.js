/**
 * EXERCISE 2: Arrow Function Scope
 * Problem: Arrow functions don't have their own 'this'.
 */

const user = {
  name: "Najio",
  // ❓ Fix it so it works correctly
  greet() {
    console.log("Hello " + this.name);
  },
};

user.greet();
