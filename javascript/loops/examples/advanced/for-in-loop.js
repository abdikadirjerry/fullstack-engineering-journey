const user = {
  name: "Ahmed",

  age: 20,

  role: "Developer",
};

for (const key in user) {
  console.log(`${key}: ${user[key]}`);
}
