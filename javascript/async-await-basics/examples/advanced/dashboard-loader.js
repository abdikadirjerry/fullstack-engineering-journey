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
  const user = await loginUser();

  console.log(`Welcome ${user}`);

  const dashboard = await loadDashboard();

  console.log(dashboard);
}

startApp();
