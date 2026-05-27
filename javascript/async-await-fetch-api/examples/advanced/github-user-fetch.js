// ======================================
// GITHUB USER FETCH
// ======================================

async function getGitHubUser() {
  try {
    console.log("Fetching GitHub user...");

    const response = await fetch("https://api.github.com/users/octocat");

    const user = await response.json();

    console.log("GitHub user loaded");

    console.log(user);

    console.log(`Username: ${user.login}`);

    console.log(`Followers: ${user.followers}`);
  } catch (error) {
    console.log("GitHub API Error");

    console.log(error);
  }
}

getGitHubUser();
