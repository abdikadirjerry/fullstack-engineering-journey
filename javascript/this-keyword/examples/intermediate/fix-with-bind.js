/**
 * Fixing Context with .bind()
 * .bind() creates a new function with 'this' permanently set to the provided object.
 */
const user = {
  name: "Najio",
  greet() {
    console.log("Hello " + this.name);
  },
};

const fixed = user.greet.bind(user);
fixed(); // ✅ Result: Hello Najio
