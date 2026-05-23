// ======================================
// PROMISE FINALLY
// ======================================

const task = new Promise((resolve) => {
  resolve("Task completed");
});

task
  .then((result) => {
    console.log(result);
  })
  .finally(() => {
    console.log("Finished");
  });
