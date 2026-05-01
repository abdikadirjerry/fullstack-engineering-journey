// EASY
// 1. Create a closure that returns your name

function myName() {
  let name = "YourName";
  return function () {
    console.log(name);
  };
}

// INTERMEDIATE
// 2. Create a function that multiplies numbers using closure

function multiply(x) {
  return function (y) {
    return x * y;
  };
}

// ADVANCED
// 3. Create a private score system using closures

function scoreSystem() {
  let score = 0;

  return {
    add(points) {
      score += points;
    },
    getScore() {
      return score;
    },
  };
}
