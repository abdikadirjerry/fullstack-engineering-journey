// ======================================
// BASIC ASYNC FETCH
// ======================================

async function loadUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  const users = await response.json();

  console.log(users);
}

loadUsers();
