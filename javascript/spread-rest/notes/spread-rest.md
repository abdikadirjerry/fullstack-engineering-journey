# 📘 JavaScript Spread & Rest Operators

## 🧠 The `...` Syntax

Both operators use the triple-dot (`...`) syntax, but they are polar opposites in functionality:

1. **Spread (`...`)**: "Expands" an iterable into individual elements.
2. **Rest (`...`)**: "Collects" multiple individual elements into a single array/object.

---

## 📌 Spread Operator (Expansion)

Used to copy or merge data without mutating the original source.

### 🔹 Arrays

- **Copying:** `const copy = [...original];`
- **Merging:** `const combined = [...arr1, ...arr2];`
- **Adding:** `const added = [0, ...arr1, 10];`

### 🔹 Objects

- **Copying:** `const copy = { ...user };`
- **Merging:** `const profile = { ...base, ...details };`
- **Overwriting:** `const update = { ...user, age: 21 };` (Last property wins!)

---

## 📌 Rest Operator (Collection)

Used to gather "the rest" of the data into a single variable.

### 🔹 Rest Parameters (Functions)

Allows a function to accept an indefinite number of arguments as an array.

```javascript
function list(...items) { /* items is an array */ }
🔹 Destructuring
Extracts specific properties and gathers the remaining ones into a new object/array.

JavaScript
const [first, ...others] = [1, 2, 3, 4];
const { name, ...bio } = { name: "Najio", age: 20, city: "Hargeisa" };
⚠️ Common Pitfalls
Shallow Copy: Both operators only copy the first level. Nested objects/arrays are still passed by reference.

Rest Position: The Rest operator must be the last element in a destructuring pattern or function parameter list.

Key Takeaway: Spread unpacks boxes; Rest packs the boxes.
```
