# 📘 JavaScript Async Basics

## 🧠 What is Asynchronous JavaScript?

JavaScript can execute code:

- synchronously
- asynchronously

---

# 📌 Synchronous JavaScript

Synchronous code runs line by line.

Each line waits for the previous line to finish.

```js
console.log("Start");

console.log("Middle");

console.log("End");
Output
Start
Middle
End
📌 Asynchronous JavaScript

Asynchronous code does NOT block other code.

Some tasks run later:

timers
API requests
database operations
file loading
📌 setTimeout()

setTimeout() runs code after a delay.

setTimeout(() => {
  console.log("Executed later");
}, 2000);
📌 Async Behavior Example
console.log("Start");

setTimeout(() => {
  console.log("Async Task");
}, 2000);

console.log("End");
Output
Start
End
Async Task
📌 Why Does This Happen?

JavaScript uses:

Call Stack
Web APIs
Callback Queue
Event Loop

The event loop handles asynchronous tasks.

📌 Common Async Tasks
API requests
Timers
Fetching data
User events
⚠️ Common Mistakes
expecting async code to run immediately
misunderstanding execution order
blocking the main thread
🎯 Key Takeaway

Asynchronous JavaScript allows tasks to run later without stopping the application.
```
