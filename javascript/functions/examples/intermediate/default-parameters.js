function createUser(name, role = "Student") {
  return {
    name,
    role,
  };
}

console.log(createUser("Ahmed"));

console.log(createUser("Ali", "Developer"));
