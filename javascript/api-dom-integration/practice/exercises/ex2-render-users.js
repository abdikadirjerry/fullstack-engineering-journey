// ======================================
// EXERCISE 2
// RENDER USERS
// ======================================

const usersContainer = document.getElementById("users");

async function renderUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  const users = await response.json();

  users.forEach((user) => {
    usersContainer.innerHTML += `
      <h3>${user.name}</h3>
    `;
  });
}

renderUsers();
