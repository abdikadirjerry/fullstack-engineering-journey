// ======================================
// USER LOADER
// ======================================

function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Ahmed");
    }, 2000);
  });
}

async function loadUser() {
  const user = await fetchUser();

  console.log(`Welcome ${user}`);
}

loadUser();
