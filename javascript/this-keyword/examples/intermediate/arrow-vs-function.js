/**
 * Arrow Functions vs. Regular Functions
 * Arrow functions do not have their own 'this'; they inherit it from the outer scope.
 */
const user = {
  name: "Najio",

  normal() {
    console.log("Normal function 'this':", this.name);
  },

  arrow: () => {
    // 'this' here refers to the global scope, not 'user'
    console.log("Arrow function 'this':", this.name);
  },
};

user.normal(); // ✅ Works
user.arrow(); // ❌ undefined
