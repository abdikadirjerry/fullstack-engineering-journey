class Counter {
  constructor(name) {
    this.name = name;
    this.count = 0;
  }

  increment() {
    this.count++;
    this.render();
  }

  decrement() {
    this.count--;
    this.render();
  }

  render() {
    console.log(`${this.name}: ${this.count}`);
  }
}

const counter1 = new Counter("Counter 1");

counter1.increment();
counter1.increment();
counter1.decrement();
