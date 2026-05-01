# Closures (Basics)

## Definition

A closure is created when a function remembers variables from its outer scope even after the outer function has finished executing.

---

## Example

```js
function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

const counter = outer();
counter(); // 1
counter(); // 2
```
