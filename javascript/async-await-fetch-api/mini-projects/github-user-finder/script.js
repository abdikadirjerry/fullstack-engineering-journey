// ======================================
// GITHUB USER FINDER
// ======================================

const input = document.getElementById("username");

const button = document.getElementById("search-btn");

const result = document.getElementById("result");

async function searchUser() {
  const username = input.value;

  result.innerText = "Searching...";

  try {
    const response = await fetch(`https://api.github.com/users/${username}`);

    const user = await response.json();

    result.innerText = `User: ${user.login}`;
  } catch (error) {
    result.innerText = "User not found";
  }
}

button.addEventListener("click", searchUser);
