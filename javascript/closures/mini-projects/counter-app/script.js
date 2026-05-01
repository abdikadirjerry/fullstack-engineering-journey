function createCounter() {
  let count = 0;

  return {
    increment() {
      count++;
      console.log("Count:", count);
    },
  };
}
