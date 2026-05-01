// Easy Closure Example

function outer() {
  let name = "Abdikadir";

  function inner() {
    console.log("Hello " + name);
  }

  return inner;
}

const fn = outer();
fn(); // Hello Abdikadir
