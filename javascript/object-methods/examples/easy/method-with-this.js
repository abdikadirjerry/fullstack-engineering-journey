const user = {
  name: "Najio",
  greet() {
    // Accessing properties via 'this'
    console.log(`Hello, my name is ${this.name}`);
  }
};

user.greet();