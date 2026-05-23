# 📘 JavaScript Promises Advanced (Junior Level)

## 🧠 What Will You Learn?

In this lesson you will learn:

- Promise chaining
- .catch()
- .finally()
- Promise.all()
- Promise.race()

These are important junior-level Promise concepts.

---

# 📌 Promise Chaining

Promise chaining allows multiple async steps.

```js
loginUser()
  .then(user => {
    return getProfile(user);
  })
  .then(profile => {
    console.log(profile);
  });
📌 .catch()

.catch() handles Promise errors.

promise
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log(error);
  });
📌 .finally()

.finally() always runs.

promise.finally(() => {
  console.log("Finished");
});

Useful for:

hiding loaders
cleanup tasks
📌 Promise.all()

Runs multiple Promises together.

Promise.all([
  promise1,
  promise2
])
.then(results => {
  console.log(results);
});
📌 Promise.race()

Returns the first completed Promise.

Promise.race([
  promise1,
  promise2
])
.then(result => {
  console.log(result);
});
📌 Real Junior-Level Use Cases
loading user data
dashboard requests
authentication flow
loading multiple resources
⚠️ Common Mistakes
forgetting return inside .then()
missing .catch()
nesting Promises unnecessarily
🎯 Key Takeaway

Advanced Promises help organize asynchronous workflows cleanly.
```
