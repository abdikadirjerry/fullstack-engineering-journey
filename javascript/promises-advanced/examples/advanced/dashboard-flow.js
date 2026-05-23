// ======================================
// DASHBOARD FLOW
// ======================================

function loginUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Ahmed");
    }, 2000);
  });
}

function loadDashboard(user) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${user}'s Dashboard Loaded`);
    }, 2000);
  });
}

loginUser()
  .then((user) => {
    console.log(`Welcome ${user}`);

    return loadDashboard(user);
  })
  .then((result) => {
    console.log(result);
  });
