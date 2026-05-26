// ======================================
// GITHUB USER FETCH
// ======================================

async function getGitHubUser() {
  try {
    const response = await fetch("https://api.github.com/users/octocat");

    const user = await response.json();

    console.log(user);
  } catch (error) {
    console.log("GitHub API Error");

    console.log(error);
  }
}

getGitHubUser();
