# 📘 JavaScript Event Listeners

## 🧠 What are Event Listeners?
Event listeners allow JavaScript to respond to user interactions. They "listen" for a specific action on a specific element and trigger a function when that action occurs.

### Examples of Events:
- **Clicking** buttons
- **Typing** in inputs
- **Hovering** over elements
- **Submitting** forms
- **Pressing** keyboard keys

---

## 📌 addEventListener()
The standard method for handling events in modern JavaScript.

```js
element.addEventListener("event", callback);
🖱️ Click Event
JavaScript
const button = document.getElementById("btn");

button.addEventListener("click", () => {
  console.log("Button clicked");
});
⌨️ Input Event
Fires whenever the value of an <input>, <select>, or <textarea> element is changed.

JavaScript
const input = document.getElementById("username");

input.addEventListener("input", () => {
  console.log(input.value);
});
🖱️ Mouse Events
JavaScript
box.addEventListener("mouseenter", () => {
  console.log("Mouse entered");
});

box.addEventListener("mouseleave", () => {
  console.log("Mouse left");
});
⌨️ Keyboard Events
JavaScript
document.addEventListener("keydown", (event) => {
  console.log(`Key pressed: ${event.key}`);
});
📌 The Event Object
The callback function automatically receives an event object containing useful data about the event.

JavaScript
button.addEventListener("click", (event) => {
  console.log(event.target); // The element that was clicked
});
📌 Prevent Default Behavior
Used to stop the browser's default action (like a form refreshing the page).

JavaScript
form.addEventListener("submit", (event) => {
  event.preventDefault(); 
});
⚠️ Common Mistakes
Forgetting Selection: Trying to add a listener to a variable that is null.

Wrong Event Names: Using "onclick" instead of "click" inside addEventListener.

Execution Order: Adding listeners before the DOM has actually loaded.

Form Refresh: Not using preventDefault() on form submissions.

🎯 Key Takeaway
Event listeners turn static HTML into interactive web applications.