/**
 * ES6 Class Context
 * 'this' inside a class refers to the specific instance created via 'new'.
 */
class User {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log("Hello from Class: " + this.name);
  }
}

const user = new User("Najio");
user.greet();
