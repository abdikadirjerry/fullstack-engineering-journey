// ======================================
// EXERCISE 1
// BASIC ASYNC
// ======================================

async function greetUser() {
  return "Hello Ahmed";
}

async function startGreeting() {
  console.log("Preparing greeting...");

  const message = await greetUser();

  console.log(message);

  console.log("Greeting completed");
}

startGreeting();
