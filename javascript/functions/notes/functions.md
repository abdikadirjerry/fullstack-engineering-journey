# 📘 JavaScript Functions

## What is a Function?

A function is a reusable block of code that performs a specific task.

```js
function greet() {
  console.log("Hello");
}
```

---

## Calling a Function

```js
greet();
```

Output:

Hello

---

## Parameters

```js
function greet(name) {
  console.log(`Hello ${name}`);
}

greet("Ahmed");
```

---

## Return Values

```js
function add(a, b) {
  return a + b;
}

const result = add(5, 10);
```

---

## Function Declaration

```js
function multiply(a, b) {
  return a * b;
}
```

---

## Function Expression

```js
const multiply = function (a, b) {
  return a * b;
};
```

---

## Arrow Function

```js
const multiply = (a, b) => {
  return a * b;
};
```

Short version:

```js
const multiply = (a, b) => a * b;
```

---

## Default Parameters

```js
function greet(name = "Guest") {
  console.log(name);
}
```

---

## Scope

Variables inside functions are local.

```js
function test() {
  const message = "Hello";
}

console.log(message);
```

Error.

---

## Best Practices

- One responsibility per function
- Use meaningful names
- Keep functions small
- Return values instead of logging
- Avoid duplicate code

---

## Real World Examples

Functions are used in:

- Event listeners
- API calls
- DOM manipulation
- React components
- Node.js applications
