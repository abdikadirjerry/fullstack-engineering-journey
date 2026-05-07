const calculator = {
  value: 0,

  add(num) {
    this.value += num;
  },

  subtract(num) {
    this.value -= num;
  },
};

calculator.add(10);
calculator.subtract(3);
console.log("Calculator Value:", calculator.value); // 7
