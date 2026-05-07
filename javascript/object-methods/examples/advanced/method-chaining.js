const calculator = {
  value: 0,

  add(num) {
    this.value += num;
    return this; // Required for chaining
  },

  multiply(num) {
    this.value *= num;
    return this; // Required for chaining
  },
};

// Chaining multiple methods
calculator.add(5).multiply(2).add(10);
console.log("Chained Result:", calculator.value); // 20
