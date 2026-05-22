# 📘 JavaScript Promises Basics

## 🧠 What is a Promise?

A Promise is a JavaScript object used for handling asynchronous operations.

A Promise represents:

- success
- failure
- pending operation

---

# 📌 Promise States

A Promise has 3 states:

1. Pending
2. Fulfilled
3. Rejected

---

# 📌 Creating a Promise

```js
const promise = new Promise(
  (resolve, reject) => {

    const success = true;

    if (success) {
      resolve("Task completed");
    } else {
      reject("Task failed");
    }
  }
);
📌 Handling Promises

Use:

.then()
.catch()
promise
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log(error);
  });
📌 Promise Example
const loginPromise =
  new Promise((resolve) => {

    setTimeout(() => {
      resolve("User logged in");
    }, 2000);

  });

loginPromise.then(message => {
  console.log(message);
});
📌 Why Promises?

Promises help:

avoid callback hell
improve readability
handle async tasks better
📌 Promise Flow
Promise starts
Promise stays pending
Promise resolves or rejects
.then() or .catch() runs
⚠️ Common Mistakes
forgetting return
missing .catch()
confusing synchronous and asynchronous behavior
🎯 Key Takeaway

Promises make asynchronous JavaScript cleaner and easier to manage.
```
