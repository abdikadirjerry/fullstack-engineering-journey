# 📘 JavaScript Scope

Scope determines where variables can be accessed.

---

# What is Scope?

Scope controls the visibility of variables.

```js
const name = "Ahmed";

console.log(name);
```

The variable is accessible because it is inside its scope.

---

# Global Scope

Variables declared outside functions and blocks.

```js
const appName = "My App";

function showApp() {
  console.log(appName);
}
```

Global variables can be accessed everywhere.

---

# Function Scope

Variables declared inside a function.

```js
function greet() {
  const message = "Hello";

  console.log(message);
}

greet();
```

Outside the function:

```js
console.log(message);
```

Error.

---

# Block Scope

Variables declared with let or const inside blocks.

```js
if (true) {
  const username = "Ahmed";

  console.log(username);
}
```

Outside block:

```js
console.log(username);
```

Error.

---

# var and Block Scope

var ignores block scope.

```js
if (true) {
  var age = 20;
}

console.log(age);
```

Works.

---

# Lexical Scope

Inner functions can access outer variables.

```js
function outer() {
  const username = "Ahmed";

  function inner() {
    console.log(username);
  }

  inner();
}
```

---

# Scope Chain

JavaScript looks for variables:

1. Current scope
2. Parent scope
3. Global scope

```js
const country = "Somaliland";

function outer() {
  function inner() {
    console.log(country);
  }

  inner();
}
```

---

# Variable Shadowing

```js
const name = "Ahmed";

function showName() {
  const name = "Ali";

  console.log(name);
}

showName();
```

Output:

```txt
Ali
```

---

# Best Practices

- Use const by default
- Use let when needed
- Avoid var
- Keep scopes small
- Avoid unnecessary globals
