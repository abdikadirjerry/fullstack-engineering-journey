# 📘 JavaScript Destructuring

## 🧠 What is Destructuring?

Destructuring is a concise syntax that allows you to "unpack" values from arrays or properties from objects into distinct variables. It significantly reduces boilerplate code.

---

## 📌 Array Destructuring

Unpacks values based on their **position (index)**.

- **Basic:** `const [a, b] = [1, 2];`
- **Skipping:** `const [first, , third] = [1, 2, 3];`
- **Rest Pattern:** `const [head, ...tail] = [1, 2, 3, 4];`
- **Swapping:** `[x, y] = [y, x];` (No temp variable needed!)

## 📌 Object Destructuring

Unpacks values based on **property names (keys)**.

- **Basic:** `const { name, age } = user;`
- **Renaming:** `const { name: userName } = user;`
- **Nesting:** `const { address: { city } } = user;`
- **Defaults:** `const { role = "Guest" } = user;`

## 📌 Function Parameter Destructuring

Very common in modern frameworks (like React). Instead of passing an entire object, you destructure the parameters in the function signature.

```javascript
function profile({ name, email }) {
  console.log(`${name}: ${email}`);
}
```
