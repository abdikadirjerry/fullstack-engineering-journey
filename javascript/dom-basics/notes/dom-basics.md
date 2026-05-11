# 📘 JavaScript DOM Basics

## 🧠 What is the DOM?

DOM stands for:

> **Document Object Model**

The DOM allows JavaScript to interact with HTML elements.

With the DOM, you can:

- Select elements
- Change content
- Update styles
- Handle user input
- Build interactive applications

---

## 📌 Selecting Elements

### `getElementById()`

Selects an element by its ID.

```js
const title = document.getElementById("title");
HTML
<h1 id="title">Hello</h1>
querySelector()
Selects the first matching element.

JavaScript
const button = document.querySelector(".btn");
HTML
<button class="btn">Click</button>
📌 Modifying Elements
innerText
Changes the visible text content.

JavaScript
title.innerText = "New Title";
innerHTML
Changes the inner HTML structure.

JavaScript
container.innerHTML = "<h2>Hello</h2>";
⚠️ Note: Be careful with user input to avoid security issues (XSS).

value
Gets or sets an input value.

JavaScript
const input = document.getElementById("name");
console.log(input.value);
📌 Event Listeners
Listen for user interactions like clicks.

JavaScript
button.addEventListener("click", () => {
  console.log("Clicked");
});
⚠️ Common Mistakes
Wrong selectors

Forgetting # (for IDs) or . (for classes) in querySelector

Using innerHTML unnecessarily when innerText would suffice

Accessing elements before the page loads

🎯 Key Takeaway
The DOM connects JavaScript with HTML to create interactive web pages.
```

---

# 📌 Real-World DOM Use Cases

The DOM is used in almost every web application.

Examples:

- Form validation
- Dark mode toggle
- Modals and popups
- Navigation menus
- Interactive dashboards
- Todo applications
- Live search filtering
- Games and animations

---

# 📌 Best Practices

- Use meaningful variable names
- Avoid excessive DOM updates
- Prefer `textContent` or `innerText` when possible
- Keep logic separated into functions
- Use event delegation for large apps

---

# 🚀 Next Topics

After DOM Basics, useful next topics are:

- DOM Events
- Event Delegation
- Forms & Validation
- Local Storage
- Async JavaScript
- Fetch API
