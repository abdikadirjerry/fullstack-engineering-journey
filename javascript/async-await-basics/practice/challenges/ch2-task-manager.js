// ======================================
// CHALLENGE 2
// TASK MANAGER
// ======================================

function completeTask() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task Completed");
    }, 3000);
  });
}

async function runTask() {
  console.log("Running Task...");

  const result = await completeTask();

  console.log(result);
}

runTask();
