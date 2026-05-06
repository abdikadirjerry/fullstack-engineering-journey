# 📘 JavaScript Object Foundations

## 🧠 What is an Object?

An object is a collection of key-value pairs.

```js
const user = {
  name: "Najio",
  age: 20
};
📌 Accessing Properties
console.log(user.name);      // dot notation
console.log(user["age"]);    // bracket notation
📌 Adding & Updating
user.city = "Hargeisa";
user.age = 21;
📌 Deleting
delete user.age;
📌 Methods (Functions in Objects)
const user = {
  name: "Najio",
  greet() {
    return "Hello " + this.name;
  }
};
📌 Looping Objects
for (let key in user) {
  console.log(key, user[key]);
}
📌 Object.keys / values / entries
Object.keys(user);
Object.values(user);
Object.entries(user);
📌 Nested Objects
const user = {
  name: "Najio",
  address: {
    city: "Hargeisa"
  }
};
📌 Shallow Copy
const copy = Object.assign({}, user);
const spread = { ...user };
⚠️ Common Mistakes
Confusing reference vs value
Modifying original object accidentally
Forgetting this in methods
```
