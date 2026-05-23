// ======================================
// PROMISE CHAINING
// ======================================

const loginPromise = new Promise((resolve) => {
  resolve("Ahmed");
});

loginPromise
  .then((username) => {
    console.log(`Welcome ${username}`);

    return "Profile Loaded";
  })
  .then((profile) => {
    console.log(profile);
  });
