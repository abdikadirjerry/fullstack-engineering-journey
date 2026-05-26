// ======================================
// EXERCISE 1
// FETCH USERS
// ======================================

async function loadUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  const users = await response.json();

  console.log(users);
}

loadUsers();
