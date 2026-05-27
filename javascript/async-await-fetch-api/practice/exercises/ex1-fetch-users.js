// ======================================
// EXERCISE 1
// FETCH USERS
// ======================================

async function loadUsers() {
  try {
    console.log("Loading users...");

    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const users = await response.json();

    console.log(`Total users: ${users.length}`);

    console.log(users);
  } catch (error) {
    console.log("Failed to fetch users");

    console.log(error);
  }
}

loadUsers();
