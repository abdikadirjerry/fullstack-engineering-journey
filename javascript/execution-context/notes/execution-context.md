# 📘 JavaScript Execution Context

## What is Execution Context?

Execution Context is the environment in which JavaScript code is evaluated and executed.

Think of it as:

"Everything JavaScript needs to run your code."

---

## Types of Execution Context

### 1. Global Execution Context (GEC)

Created when JavaScript starts.

Example:

```js
const name = "Jerry";

console.log(name);
```

The code runs inside the Global Execution Context.

There is only ONE Global Execution Context.

---

### 2. Function Execution Context (FEC)

Created every time a function is called.

```js
function greet() {
  console.log("Hello");
}

greet();
```

Calling greet() creates a new Function Execution Context.

---

## Execution Context Lifecycle

Each context has two phases:

### Phase 1

Creation Phase

JavaScript:

- Creates variables
- Creates functions
- Determines this value

---

### Phase 2

Execution Phase

JavaScript:

- Assigns values
- Executes code line by line

---

## Example

```js
console.log(name);

var name = "Jerry";
```

Creation Phase:

```js
var name = undefined;
```

Execution Phase:

```js
name = "Jerry";
```

---

## Execution Stack

Example:

```js
function first() {
  second();
}

function second() {
  console.log("Second");
}

first();
```

Stack:

Global Context

↓

first()

↓

second()

↓

console.log()

---

## Important Rule

Functions create new execution contexts.

Variables do NOT create execution contexts.

---

## Why Learn Execution Context?

Understanding execution context helps with:

- Hoisting
- Scope
- Closures
- this keyword
- Call Stack
- Async JavaScript

These are common interview topics.
