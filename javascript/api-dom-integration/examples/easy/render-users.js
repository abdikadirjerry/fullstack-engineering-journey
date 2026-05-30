// ======================================
// RENDER USERS
// ======================================

const usersContainer = document.getElementById("users");

async function loadUsers() {
  usersContainer.innerHTML = "<p>Loading users...</p>";

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const users = await response.json();

    usersContainer.innerHTML = "";

    users.forEach((user) => {
      usersContainer.innerHTML += `
        <p>
          ${user.name}
          (${user.email})
        </p>
      `;
    });
  } catch (error) {
    usersContainer.innerHTML = "<p>Failed to load users.</p>";
  }
}

loadUsers();
