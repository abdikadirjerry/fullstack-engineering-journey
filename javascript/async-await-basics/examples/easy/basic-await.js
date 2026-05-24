// ======================================
// BASIC AWAIT
// ======================================

function getMessage() {
  return Promise.resolve("Message Loaded");
}

async function loadMessage() {
  const message = await getMessage();

  console.log(message);
}

loadMessage();
