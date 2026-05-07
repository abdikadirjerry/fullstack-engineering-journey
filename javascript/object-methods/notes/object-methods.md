# 📘 JavaScript Object Methods

## 🧠 What are Object Methods?

Object methods are functions stored as properties within an object. They allow objects to "do" things using their own internal data.

### 📌 Method Syntax

In modern JavaScript (ES6+), we use the shorthand method definition:

```javascript
const user = {
  greet() { // Shorthand for greet: function() {}
    console.log("Hello!");
  }
};
📌 The Power of this
The this keyword inside a method refers to the object that is currently calling the method.

JavaScript
const user = {
  name: "Najio",
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
};
📌 Method Chaining
By returning this at the end of a method, you can link multiple method calls together in a single line.

JavaScript
calculator.add(5).subtract(2).multiply(10);
⚠️ Common Pitfalls
Arrow Functions: Avoid using arrow functions for methods if you need to access this. Arrow functions do not bind their own this.

Context Loss: Passing a method as a callback (like in setTimeout) will cause it to lose its this context unless bound.
```
