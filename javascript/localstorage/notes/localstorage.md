# 📘 JavaScript localStorage

## 🧠 What is localStorage?

`localStorage` is a browser feature that allows JavaScript to store data inside the browser.

The data:

- stays after page refresh
- stays after closing the browser
- is stored as strings

---

# 📌 Why Use localStorage?

localStorage is useful for:

- Todo apps
- Theme settings
- Saving forms
- Shopping carts
- Notes apps
- User preferences

---

# 📌 Save Data

```js
localStorage.setItem("username", "Ahmed");
📌 Get Data
const username =
  localStorage.getItem("username");

console.log(username);
📌 Remove Data
localStorage.removeItem("username");
📌 Clear All Data
localStorage.clear();
📌 Storing Arrays & Objects

localStorage only stores strings.

Use:

JSON.stringify()
JSON.parse()
📌 Save Array
const tasks = [
  "Study",
  "Practice"
];

localStorage.setItem(
  "tasks",
  JSON.stringify(tasks)
);
📌 Get Array
const savedTasks =
  JSON.parse(
    localStorage.getItem("tasks")
  );

console.log(savedTasks);
⚠️ Common Mistakes
Forgetting JSON.stringify()
Forgetting JSON.parse()
Saving sensitive data
Assuming localStorage is secure
🎯 Key Takeaway

localStorage helps JavaScript save persistent data inside the browser.
```
