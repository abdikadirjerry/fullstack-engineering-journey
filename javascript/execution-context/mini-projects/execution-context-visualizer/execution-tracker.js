function login() {
  console.log("Entering Login Context");

  authenticate();
}

function authenticate() {
  console.log("Entering Authentication Context");

  createSession();
}

function createSession() {
  console.log("Entering Session Context");

  console.log("Session Created");
}

login();
