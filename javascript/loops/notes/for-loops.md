# 📘 JavaScript For Loops

## What is a Loop?

A loop allows you to execute code repeatedly.

Instead of writing:

```js
console.log(1);
console.log(2);
console.log(3);
```

You can write:

```js
for (let i = 1; i <= 3; i++) {
  console.log(i);
}
```

---

## Basic Syntax

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

### Parts

1. Initialization

```js
let i = 0;
```

2. Condition

```js
i < 5;
```

3. Increment

```js
i++;
```

---

## Loop Through Arrays

```js
const fruits = ["Apple", "Banana", "Orange"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```

---

## Break

Stops the loop.

```js
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break;
  }

  console.log(i);
}
```

---

## Continue

Skips one iteration.

```js
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }

  console.log(i);
}
```

---

## Nested Loops

```js
for (let row = 1; row <= 3; row++) {
  for (let col = 1; col <= 3; col++) {
    console.log(row, col);
  }
}
```

---

## Best Practices

- Avoid infinite loops
- Use meaningful variable names
- Prefer array.length
- Keep loops simple
- Use break when needed

---

## Real World Usage

Loops are used for:

- Rendering data
- Processing arrays
- Generating HTML
- API responses
- Reports
