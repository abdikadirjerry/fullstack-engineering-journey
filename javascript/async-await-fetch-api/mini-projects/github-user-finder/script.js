// ======================================
// GITHUB USER FINDER
// ======================================

const input = document.getElementById("username");

const button = document.getElementById("search-btn");

const result = document.getElementById("result");

async function searchUser() {
  const username = input.value.trim();

  if (!username) {
    result.innerText = "Please enter a username";

    return;
  }

  result.innerText = "Searching...";

  try {
    const response = await fetch(`https://api.github.com/users/${username}`);

    const user = await response.json();

    if (user.message === "Not Found") {
      result.innerText = "User not found";

      return;
    }

    result.innerText = `User: ${user.login} | Followers: ${user.followers}`;
  } catch (error) {
    result.innerText = "Something went wrong";
  }
}

button.addEventListener("click", searchUser);
