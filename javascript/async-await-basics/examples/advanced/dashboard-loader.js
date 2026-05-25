// ======================================
// DASHBOARD LOADER
// ======================================

function loginUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Ahmed");
    }, 2000);
  });
}

function loadDashboard() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Dashboard Loaded");
    }, 2000);
  });
}

async function startApp() {
  console.log("Application started");

  console.log("Authenticating user...");

  const user = await loginUser();

  console.log(`Welcome ${user}`);

  console.log("Loading dashboard...");

  const dashboard = await loadDashboard();

  console.log(dashboard);

  console.log("Application ready");
}

startApp();
