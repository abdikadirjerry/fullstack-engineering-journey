function login() {
  console.log("Login Start");

  validateUser();
}

function validateUser() {
  console.log("Validation");

  createSession();
}

function createSession() {
  console.log("Session Created");
}

login();
