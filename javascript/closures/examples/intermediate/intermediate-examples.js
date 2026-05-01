// Intermediate Closure Example (Counter)

function counter() {
  let count = 0;

  return function () {
    count++;
    console.log("Count:", count);
  };
}

const add = counter();

add(); // 1
add(); // 2
add(); // 3
