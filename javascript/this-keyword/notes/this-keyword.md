# JavaScript `this` Keyword

## 🧠 What is `this`?

`this` refers to the object that is currently executing the function.

👉 Its value depends on **how a function is called**, NOT where it is written.

---

## 📌 1. Global Context

In the global scope:

```js
console.log(this);
In browser → window
In Node.js → {} (module.exports)
📌 2. Inside a Function
function show() {
  console.log(this);
}

show();
In strict mode → undefined
Otherwise → global object
📌 3. Inside an Object Method
const user = {
  name: "Ali",
  greet() {
    console.log(this.name);
  }
};

user.greet();

👉 this = the object (user)

📌 4. Arrow Functions
const user = {
  name: "Ali",
  greet: () => {
    console.log(this.name);
  }
};

user.greet();

👉 Arrow functions DO NOT have their own this
👉 They inherit from parent scope

📌 5. Constructor Function
function Person(name) {
  this.name = name;
}

const p1 = new Person("Ali");

👉 this = new object being created

📌 6. Explicit Binding
call()
function greet() {
  console.log(this.name);
}

greet.call({ name: "Ali" });
apply()
greet.apply({ name: "Ali" });
bind()
const newFunc = greet.bind({ name: "Ali" });
newFunc();
📌 7. Event Handlers
button.addEventListener("click", function() {
  console.log(this);
});

👉 this = the element that triggered the event

⚠️ Common Mistakes

❌ Using arrow function in object methods
❌ Losing this in callbacks
❌ Forgetting bind()

🧠 Rule to Remember

👉 "Who is calling the function?" = that is this
```
