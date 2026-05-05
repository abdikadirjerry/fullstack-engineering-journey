/**
 * Losing 'this' Context
 * Assigning a method to a variable causes it to lose its connection to the object.
 */
const user = {
  name: "Najio",
  greet() {
    console.log("Hello " + this.name);
  },
};

const greetFunc = user.greet;
greetFunc(); // ❌ Result: undefined (context is lost)
