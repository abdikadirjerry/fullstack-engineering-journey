class UserManager {
  constructor() {
    this.users = [];
  }

  addUser(user) {
    this.users.push(user);
  }

  removeUser(name) {
    this.users = this.users.filter((user) => user.name !== name);
  }

  listUsers() {
    console.log(this.users);
  }
}

const app = new UserManager();

app.addUser({ name: "Najio", age: 20 });
app.addUser({ name: "Ali", age: 25 });

app.listUsers();
