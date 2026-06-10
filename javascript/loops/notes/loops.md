# 📘 JavaScript Loops

Loops allow code to execute repeatedly.

## Types of Loops

### for Loop

Used when you know how many times to iterate.

```js
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

---

### while Loop

Runs while a condition remains true.

```js
let count = 1;

while (count <= 5) {
  console.log(count);
  count++;
}
```

---

### do...while Loop

Runs at least once.

```js
let count = 1;

do {
  console.log(count);
  count++;
} while (count <= 5);
```

---

### for...of Loop

Used for arrays and strings.

```js
const fruits = ["Apple", "Banana", "Orange"];

for (const fruit of fruits) {
  console.log(fruit);
}
```

---

### for...in Loop

Used for object properties.

```js
const user = {
  name: "Ahmed",
  age: 20,
};

for (const key in user) {
  console.log(key);
}
```

---

### break

Stops a loop.

```js
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break;
  }

  console.log(i);
}
```

---

### continue

Skips the current iteration.

```js
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }

  console.log(i);
}
```

---

### Nested Loops

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
- Use for...of for arrays
- Use for...in for objects
- Use break carefully
