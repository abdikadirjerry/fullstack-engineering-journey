// ======================================
// EXERCISE 2
// AWAIT DELAY
// ======================================

function delayedMessage() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Delayed Message");
    }, 2000);
  });
}

async function showMessage() {
  console.log("Waiting for message...");

  const result = await delayedMessage();

  console.log(result);

  console.log("Async task completed");
}

showMessage();
