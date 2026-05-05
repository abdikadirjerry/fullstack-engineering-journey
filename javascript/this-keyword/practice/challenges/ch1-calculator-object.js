/**
 * CHALLENGE 1: Method Chaining
 * By returning 'this' at the end of every method,
 * you can chain multiple function calls together.
 */

const calculator = {
  value: 0,

  add(num) {
    this.value += num;
    return this; // Allows chaining
  },

  subtract(num) {
    this.value -= num;
    return this; // Allows chaining
  },

  multiply(num) {
    this.value *= num;
    return this; // Allows chaining
  },

  getResult() {
    console.log("Current Value:", this.value);
    return this.value;
  },
};

// ❓ Make it work like:
calculator.add(5).multiply(2).subtract(3).getResult();
// Expected Result: (0 + 5) * 2 - 3 = 7
