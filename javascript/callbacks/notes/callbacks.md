# 📘 JavaScript Callbacks

## 🧠 What is a Callback?

A callback is a function passed into another function as an argument.

The callback function is executed later.

---

# 📌 Why Use Callbacks?

Callbacks are used for:

- asynchronous JavaScript
- event handling
- timers
- API requests
- reusable logic

---

# 📌 Basic Callback Example

```js
function greet(name) {
  console.log(`Hello ${name}`);
}

function processUser(callback) {
  callback("Ahmed");
}

processUser(greet);
📌 Anonymous Callback
function calculate(a, b, callback) {
  callback(a, b);
}

calculate(5, 3, function (x, y) {
  console.log(x + y);
});
📌 Arrow Function Callback
const numbers = [1, 2, 3];

numbers.forEach(number => {
  console.log(number);
});
📌 Callback with setTimeout()
setTimeout(() => {
  console.log("Executed after 2 seconds");
}, 2000);
📌 Callback Flow
Function starts
Callback is passed
Main function executes
Callback executes later
⚠️ Common Mistakes
calling callback immediately instead of passing it
forgetting parameters
nested callbacks causing callback hell
📌 Callback Hell

Too many nested callbacks can make code hard to read.

first(() => {
  second(() => {
    third(() => {
      console.log("Callback Hell");
    });
  });
});
🎯 Key Takeaway

Callbacks allow functions to run later or after another task finishes.
```
