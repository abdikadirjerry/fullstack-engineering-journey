/**
 * EXERCISE 3: Explicit Binding with call()
 */

function sayHi() {
  console.log("Hi " + this.name);
}

const user = { name: "Najio" };

// ❓ Use call() to run sayHi with user
sayHi.call(user);
