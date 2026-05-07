const user = {
  name: "Najio",
};

// Dynamically adding a method to an existing object
user.sayBye = function () {
  console.log(`${this.name} says: Goodbye!`);
};

user.sayBye();
