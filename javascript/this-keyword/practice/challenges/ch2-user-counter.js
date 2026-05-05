/**
 * CHALLENGE 2: Instance-Specific Context
 * Using constructor functions to ensure unique 'this' contexts.
 */

function Counter() {
  this.count = 0;

  this.increment = function () {
    this.count++;
    console.log("Count is now:", this.count);
  };

  this.decrement = function () {
    this.count--;
    console.log("Count is now:", this.count);
  };
}

// ❓ Create multiple counters and ensure each has its own `this`
const counterA = new Counter();
const counterB = new Counter();

counterA.increment(); // counterA.count = 1
counterA.increment(); // counterA.count = 2
counterB.increment(); // counterB.count = 1 (remains independent)
