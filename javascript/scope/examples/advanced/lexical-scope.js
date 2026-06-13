function outer() {
  const username = "Ahmed";

  function inner() {
    console.log(username);
  }

  inner();
}

outer();
