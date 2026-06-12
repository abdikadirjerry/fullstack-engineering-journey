# 📘 JavaScript Variables

## What is a Variable?

A variable is a container used to store data.

```js
let name = "Ahmed";
```

---

## Declaring Variables

JavaScript provides three ways:

```js
var username = "Ahmed";

let age = 20;

const country = "Somaliland";
```

---

## var

```js
var username = "Ahmed";
```

Characteristics:

- Can be reassigned
- Can be redeclared
- Function scoped
- Older way

Example:

```js
var name = "Ahmed";

var name = "Ali";
```

Valid but not recommended.

---

## let

```js
let age = 20;
```

Characteristics:

- Can be reassigned
- Cannot be redeclared
- Block scoped

Example:

```js
let age = 20;

age = 21;
```

---

## const

```js
const country = "Somaliland";
```

Characteristics:

- Cannot be reassigned
- Cannot be redeclared
- Block scoped

Example:

```js
const country = "Somaliland";

country = "Germany";
```

Error.

---

## Naming Rules

Valid:

```js
let userName;

let userAge;

let totalPrice;
```

Invalid:

```js
let 1name;

let user-name;

let let;
```

---

## Naming Conventions

Use camelCase:

```js
let firstName;

let totalPrice;

let isLoggedIn;
```

---

## Variable Types

```js
let name = "Ahmed";

let age = 20;

let isStudent = true;

let skills = ["HTML", "CSS"];

let user = {
  name: "Ahmed",
};
```

---

## Best Practices

- Use const by default
- Use let when reassignment is needed
- Avoid var
- Use meaningful names
- Follow camelCase
