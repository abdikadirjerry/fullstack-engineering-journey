# 📘 JavaScript Event Listeners + Forms

---

# 🧠 Introduction

Event listeners allow JavaScript to react to user interactions such as:

- Clicking buttons
- Typing in inputs
- Submitting forms
- Hovering elements

Forms are one of the most important parts of web applications.

---

# 📌 Click Events

A click event runs whenever a user clicks an element.

```js
button.addEventListener("click", () => {
  console.log("Button clicked");
});
📌 Input Events

The input event triggers whenever the value changes.

input.addEventListener("input", () => {
  console.log(input.value);
});
📌 Submit Events

The submit event runs when a form is submitted.

form.addEventListener("submit", event => {
  event.preventDefault();

  console.log("Form submitted");
});
📌 preventDefault()

preventDefault() stops the browser's default behavior.

Example:

Prevent page refresh
Prevent link navigation
event.preventDefault();
📌 Form Validation

Validation checks if user data is correct before submission.

Examples:

Empty fields
Invalid email
Weak password
if (email === "") {
  console.log("Email is required");
}
📌 Live Search Filtering

Live filtering updates results while the user types.

searchInput.addEventListener("input", () => {
  console.log("Filtering...");
});
⚠️ Common Mistakes
Forgetting preventDefault()
Using incorrect selectors
Not trimming values
Ignoring empty inputs
🎯 Best Practices
Use clear variable names
Separate logic into functions
Validate user input
Keep code readable
Avoid repeating code
```
