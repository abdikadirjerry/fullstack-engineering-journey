// ======================================
// CHALLENGE 1
// USER SEARCH
// ======================================

async function searchUser(username) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);

    const user = await response.json();

    console.log(user);
  } catch (error) {
    console.log(error);
  }
}

searchUser("octocat");
