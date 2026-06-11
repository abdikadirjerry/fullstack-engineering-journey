# 📘 JavaScript Control Flow

Control Flow determines which code executes and when.

Without control flow, JavaScript would simply execute code from top to bottom.

---

# if Statement

```js
const age = 20;

if (age >= 18) {
  console.log("Adult");
}
```

---

# if...else

```js
const age = 16;

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
```

---

# else if

```js
const score = 85;

if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else {
  console.log("C");
}
```

---

# Comparison Operators

==

===

!=

!==

>

<

> =

<=

Example:

```js
console.log(5 === 5);
```

---

# Logical Operators

AND

```js
&&
```

OR

```js
||
```

NOT

```js
!
```

Example:

```js
if (age >= 18 && hasLicense) {
  console.log("Can Drive");
}
```

---

# Truthy Values

```js
"hello"

[]

{}

42

true
```

---

# Falsy Values

```js
false;

0;

("");

null;

undefined;

NaN;
```

---

# Ternary Operator

```js
const message = age >= 18 ? "Adult" : "Minor";
```

---

# Switch Statement

```js
const role = "admin";

switch (role) {
  case "admin":
    console.log("Full Access");
    break;

  case "user":
    console.log("Limited Access");
    break;

  default:
    console.log("Guest");
}
```

---

# Nested Conditions

```js
if (loggedIn) {
  if (isAdmin) {
    console.log("Admin Panel");
  }
}
```

---

# Best Practices

- Prefer === over ==
- Avoid deep nesting
- Use switch for many fixed options
- Use ternary for simple conditions
- Keep conditions readable
