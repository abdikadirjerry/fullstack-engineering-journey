// ======================================
// RANDOM USER APP
// ======================================

const button = document.getElementById("user-btn");

const userContainer = document.getElementById("user");

async function loadUser() {
  userContainer.innerHTML = "<p>Loading user...</p>";

  try {
    const response = await fetch("https://randomuser.me/api/");

    const data = await response.json();

    const user = data.results[0];

    userContainer.innerHTML = `
      <h2>
        ${user.name.first}
        ${user.name.last}
      </h2>

      <img src="${user.picture.medium}">

      <p>${user.email}</p>

      <p>${user.location.country}</p>
    `;
  } catch (error) {
    userContainer.innerHTML = "<p>Failed to load user.</p>";
  }
}

button.addEventListener("click", loadUser);
