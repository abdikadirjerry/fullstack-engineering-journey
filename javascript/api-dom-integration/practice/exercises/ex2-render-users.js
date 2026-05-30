// ======================================
// EXERCISE 2
// RENDER USERS
// ======================================

const usersContainer = document.getElementById("users");

async function renderUsers() {
  usersContainer.innerHTML = "<p>Loading users...</p>";

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const users = await response.json();

    usersContainer.innerHTML = "";

    users.forEach((user) => {
      usersContainer.innerHTML += `
        <div>
          <h3>${user.name}</h3>
          <p>${user.email}</p>
          <p>${user.phone}</p>
        </div>
      `;
    });
  } catch (error) {
    usersContainer.innerHTML = "<p>Failed to load users.</p>";
  }
}

renderUsers();
