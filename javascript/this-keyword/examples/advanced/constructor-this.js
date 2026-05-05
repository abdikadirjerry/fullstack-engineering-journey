/**
 * Constructor Function Context
 * When using 'new', 'this' points to the newly created instance.
 */
function User(name) {
  this.name = name;
}

const u1 = new User("Najio");
console.log("Constructor instance name:", u1.name);
