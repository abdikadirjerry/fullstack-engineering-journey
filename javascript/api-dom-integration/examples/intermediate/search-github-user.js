// ======================================
// SEARCH GITHUB USER
// ======================================

const input = document.getElementById("username");

const button = document.getElementById("search-btn");

const result = document.getElementById("result");

async function searchUser() {
  const username = input.value.trim();

  if (!username) {
    result.innerHTML = "<p>Please enter a username.</p>";

    return;
  }

  try {
    result.innerHTML = "<p>Searching...</p>";

    const response = await fetch(`https://api.github.com/users/${username}`);

    const user = await response.json();

    result.innerHTML = `
      <h2>${user.login}</h2>
      <img
        src="${user.avatar_url}"
        width="100"
      >
      <p>Followers: ${user.followers}</p>
    `;
  } catch (error) {
    result.innerHTML = "<p>User not found.</p>";
  }
}

button.addEventListener("click", searchUser);
