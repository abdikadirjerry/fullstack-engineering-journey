# 📘 JavaScript Async/Await Basics

## 🧠 What is async/await?

`async/await` is a cleaner way to work with Promises.

It makes asynchronous JavaScript look like synchronous code.

---

# 📌 async Function

The `async` keyword makes a function return a Promise.

```js
async function greet() {
  return "Hello";
}
📌 await Keyword

await pauses execution until the Promise finishes.

async function getData() {

  const result =
    await Promise.resolve("Data Loaded");

  console.log(result);
}
📌 Why Use async/await?

Benefits:

cleaner syntax
easier to read
avoids Promise chaining
easier error handling
📌 Basic Example
function fetchUser() {

  return new Promise(resolve => {

    setTimeout(() => {

      resolve("Ahmed");

    }, 2000);
  });
}

async function loadUser() {

  const user =
    await fetchUser();

  console.log(user);
}

loadUser();
📌 Error Handling

Use try...catch.

async function getData() {

  try {

    const result =
      await Promise.reject(
        "Something went wrong"
      );

    console.log(result);

  } catch (error) {

    console.log(error);
  }
}
📌 Important Rules
await only works inside async functions
async functions always return Promises
use try...catch for errors
⚠️ Common Mistakes
forgetting await
using await outside async
missing try...catch
🎯 Key Takeaway

async/await makes asynchronous code cleaner and easier to understand.
```
