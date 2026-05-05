/**
 * Object Method Context
 * When a function is called as a method of an object,
 * 'this' refers to the object itself.
 */
const user = {
  name: "Najio",
  greet() {
    console.log("Hello " + this.name);
  },
};

user.greet();
