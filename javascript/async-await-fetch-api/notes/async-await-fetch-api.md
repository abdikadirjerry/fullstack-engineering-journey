# 📘 JavaScript Async/Await + Fetch API

## 🧠 What Will You Learn?

In this lesson you will learn:

- async/await
- fetch()
- JSON
- try/catch
- API requests

This is one of the most job-relevant JavaScript topics.

---

# 📌 What is fetch()?

`fetch()` is used to request data from APIs.

Example:

```js
fetch("https://api.example.com")
📌 Why Use Fetch API?

Fetch API allows JavaScript to:

get data from servers
send data
work with APIs
build modern web apps
📌 Basic fetch Example
fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
📌 async/await with fetch()
async function getUsers() {

  const response =
    await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

  const data =
    await response.json();

  console.log(data);
}
📌 What is JSON?

JSON stands for:
JavaScript Object Notation

APIs usually return data in JSON format.

Example:

{
  "name": "Ahmed",
  "age": 20
}
📌 Error Handling

Use try/catch with async/await.

async function loadData() {

  try {

    const response =
      await fetch("https://api.com");

    const data =
      await response.json();

    console.log(data);

  } catch (error) {

    console.log(error);
  }
}
📌 Real World Use Cases
weather apps
GitHub profile search
social media feeds
e-commerce products
dashboards
⚠️ Common Mistakes
forgetting await
forgetting response.json()
missing try/catch
invalid API URLs
🎯 Key Takeaway

Fetch API + async/await is essential for modern frontend development.
```
