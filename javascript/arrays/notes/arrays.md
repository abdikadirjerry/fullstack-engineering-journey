# 📘 JavaScript Arrays

## What is an Array?

An array is a collection of multiple values stored in a single variable.

```js
const fruits = ["Apple", "Banana", "Orange"];
```

---

## Creating Arrays

```js
const numbers = [1, 2, 3];

const names = ["Ahmed", "Ali", "Jerry"];
```

---

## Accessing Elements

```js
const fruits = ["Apple", "Banana", "Orange"];

console.log(fruits[0]);
```

Output:

Apple

---

## Adding Elements

### push()

Adds to the end.

```js
const users = ["Ahmed"];

users.push("Ali");
```

Result:

```js
["Ahmed", "Ali"];
```

---

## Removing Elements

### pop()

```js
users.pop();
```

Removes last element.

---

## shift()

```js
users.shift();
```

Removes first element.

---

## unshift()

```js
users.unshift("Jerry");
```

Adds to beginning.

---

## Looping Arrays

```js
const fruits = ["Apple", "Banana", "Orange"];

for (const fruit of fruits) {
  console.log(fruit);
}
```

---

## map()

Creates a new array.

```js
const numbers = [1, 2, 3];

const doubled = numbers.map((number) => number * 2);
```

Result:

```js
[2, 4, 6];
```

---

## filter()

```js
const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter((number) => number % 2 === 0);
```

Result:

```js
[2, 4];
```

---

## find()

```js
const users = [
  { id: 1, name: "Ahmed" },
  { id: 2, name: "Ali" },
];

const user = users.find((user) => user.id === 2);
```

---

## includes()

```js
const fruits = ["Apple", "Banana"];

console.log(fruits.includes("Apple"));
```

Result:

true

---

## Best Practices

- Use const when possible
- Use map instead of manual loops for transformations
- Use filter for filtering
- Use find for single items
- Avoid modifying arrays unnecessarily
