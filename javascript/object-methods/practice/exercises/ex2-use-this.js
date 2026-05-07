// ❓ Create object method using this.name
const pet = {
  name: "Rex",
  type: "Dog",
  identify() {
    console.log(`This ${this.type} is named ${this.name}.`);
  },
};

pet.identify();
