// ======================================
// CHALLENGE 1
// LOGIN FLOW
// ======================================

function login() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Ahmed");
    }, 2000);
  });
}

function loadProfile(user) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${user}'s Profile Loaded`);
    }, 2000);
  });
}

login()
  .then((user) => {
    console.log(`Welcome ${user}`);

    return loadProfile(user);
  })
  .then((profile) => {
    console.log(profile);
  });
