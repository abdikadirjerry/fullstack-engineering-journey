function double(number) {
  return number * 2;
}

function square(number) {
  return number ** 2;
}

function processNumber(number) {
  return square(double(number));
}

console.log(processNumber(5));
