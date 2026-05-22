// ======================================
// PROMISE TASK MANAGER
// ======================================

// DOM elements
const taskButton = document.getElementById("task-btn");

const statusText = document.getElementById("status");

// Promise task
function runTask() {
  return new Promise((resolve, reject) => {
    const taskSuccess = true;

    setTimeout(() => {
      if (taskSuccess) {
        resolve("Task completed successfully");
      } else {
        reject("Task failed");
      }
    }, 4000);
  });
}

// Button event
taskButton.addEventListener("click", () => {
  statusText.innerText = "Running task...";

  runTask()
    .then((result) => {
      statusText.innerText = result;
    })
    .catch((error) => {
      statusText.innerText = error;
    });
});
