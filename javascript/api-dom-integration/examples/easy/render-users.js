// ======================================
// RENDER USERS
// ======================================

const usersContainer = document.getElementById("users");

async function loadUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  const users = await response.json();

  users.forEach((user) => {
    usersContainer.innerHTML += `
      <p>${user.name}</p>
    `;
  });
}

loadUsers();
