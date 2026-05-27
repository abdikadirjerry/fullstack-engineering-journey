// ======================================
// BASIC ASYNC FETCH
// ======================================

async function loadUsers() {
  console.log("Loading users...");

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    console.log("Converting response to JSON...");

    const users = await response.json();

    console.log("Users fetched successfully");

    console.log(users);
  } catch (error) {
    console.log("Something went wrong");

    console.log(error);
  }
}

loadUsers();
