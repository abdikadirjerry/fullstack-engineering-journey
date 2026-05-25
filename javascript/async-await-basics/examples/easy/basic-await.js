// ======================================
// BASIC AWAIT
// ======================================

function getMessage() {
  return Promise.resolve("Message Loaded");
}

async function loadMessage() {
  console.log("Loading message...");

  const message = await getMessage();

  console.log("Message received");

  console.log(message);

  console.log("Execution completed");
}

loadMessage();
