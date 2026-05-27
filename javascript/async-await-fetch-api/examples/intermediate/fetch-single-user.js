// ======================================
// FETCH SINGLE USER
// ======================================

async function getUser() {
  try {
    console.log("Fetching user...");

    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1",
    );

    const user = await response.json();

    console.log("User loaded successfully");

    console.log(user);

    console.log(`Username: ${user.username}`);
  } catch (error) {
    console.log("Error loading user");

    console.log(error);
  }
}

getUser();
