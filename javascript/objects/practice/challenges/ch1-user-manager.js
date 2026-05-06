/**
 * CHALLENGE 1: User Manager
 * Task: Expand the user object with methods to manage its own state.
 */

const user = {
  name: "Najio",
  age: 20,
  status: "Active",

  updateName(newName) {
    this.name = newName;
    console.log(`Name updated to: ${this.name}`);
  },

  updateAge(newAge) {
    if (typeof newAge === "number") {
      this.age = newAge;
      console.log(`Age updated to: ${this.age}`);
    }
  },

  removeProperty(propName) {
    if (this.hasOwnProperty(propName)) {
      delete this[propName];
      console.log(`Property '${propName}' has been removed.`);
    }
  },
};

// Testing the User Manager
user.updateName("Najio Dev");
user.updateAge(21);
user.removeProperty("status");

console.log("Final User State:", user);
