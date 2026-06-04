function outer() {
  const username = "Jerry";

  function inner() {
    console.log(username);
  }

  inner();
}

outer();
