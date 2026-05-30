// ======================================
// CHALLENGE 1
// GITHUB PROFILE
// ======================================

const input = document.getElementById("username");

const button = document.getElementById("search-btn");

const profile = document.getElementById("profile");

async function loadProfile() {
  profile.innerHTML = "<p>Loading profile...</p>";

  try {
    const response = await fetch(`https://api.github.com/users/${input.value}`);

    const user = await response.json();

    profile.innerHTML = `
      <h2>${user.login}</h2>

      <img
        src="${user.avatar_url}"
        width="120"
      >

      <p>
        Followers:
        ${user.followers}
      </p>

      <p>
        Following:
        ${user.following}
      </p>

      <p>
        Repositories:
        ${user.public_repos}
      </p>
    `;
  } catch (error) {
    profile.innerHTML = "<p>Failed to load profile.</p>";
  }
}

button.addEventListener("click", loadProfile);
