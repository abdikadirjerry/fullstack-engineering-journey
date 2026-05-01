function createCounter() {
  let count = 0;

  return {
    increment() {
      count++;
      console.log("Count:", count);
    },

    decrement() {
      count--;
      console.log("Count:", count);
    },

    reset() {
      count = 0;
      console.log("Reset:", count);
    },
  };
}

const counter = createCounter();

counter.increment();
counter.increment();
counter.decrement();
counter.reset();
