function one() {
  two();
}

function two() {
  console.log("Inside Two");
}

one();
