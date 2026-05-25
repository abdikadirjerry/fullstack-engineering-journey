// ======================================
// CHALLENGE 1
// LOGIN SYSTEM
// ======================================

function loginUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Ahmed");
    }, 2000);
  });
}

function loadProfile() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Profile Loaded");
    }, 2000);
  });
}

function loadDashboard() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Dashboard Ready");
    }, 2000);
  });
}

async function startLogin() {
  console.log("Starting login...");

  const user = await loginUser();

  console.log(`Welcome ${user}`);

  const profile = await loadProfile();

  console.log(profile);

  const dashboard = await loadDashboard();

  console.log(dashboard);

  console.log("System fully loaded");
}

startLogin();
