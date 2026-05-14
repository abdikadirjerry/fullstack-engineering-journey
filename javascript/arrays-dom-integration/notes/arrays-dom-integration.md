# 📘 JavaScript Arrays + DOM Integration

## 🧠 What is Arrays + DOM Integration?

Arrays + DOM Integration means:

- storing data inside arrays
- displaying array data in the DOM
- dynamically updating UI using JavaScript

This is the foundation of:

- Todo apps
- Shopping carts
- Notes apps
- Search systems
- Dashboards

---

# 📌 Rendering Arrays in the DOM

You can loop through arrays and display items.

```js
const fruits = ["Apple", "Banana", "Orange"];

fruits.forEach(fruit => {
  console.log(fruit);
});
📌 Creating Elements Dynamically

JavaScript can create HTML elements.

const li = document.createElement("li");

li.innerText = "JavaScript";

document.body.appendChild(li);
📌 Using map()

map() transforms arrays into new arrays.

const numbers = [1, 2, 3];

const doubled =
  numbers.map(number => number * 2);

console.log(doubled);
📌 Using filter()

filter() returns matching items.

const products = [
  "Laptop",
  "Phone",
  "Tablet"
];

const filtered =
  products.filter(product =>
    product.includes("Phone")
  );

console.log(filtered);
📌 Updating the DOM
container.innerHTML = "";

This clears old UI before re-rendering.

📌 Rendering UI from Arrays
items.forEach(item => {
  const li =
    document.createElement("li");

  li.innerText = item;

  list.appendChild(li);
});
⚠️ Common Mistakes
Forgetting to clear UI before rendering
Mutating arrays accidentally
Not using trim() for user input
Using innerHTML excessively
🎯 Key Takeaway

Arrays and DOM together allow JavaScript to create dynamic interactive applications.
```
