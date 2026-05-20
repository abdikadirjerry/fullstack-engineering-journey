// ======================================
// CALLBACK TASK RUNNER
// ======================================

// Task runner
function runTask(callback) {
  console.log("Running task...");

  setTimeout(() => {
    callback();
  }, 2000);
}

// Callback task
function taskCompleted() {
  console.log("Task completed successfully");
}

// Button event
document.getElementById("run-btn").addEventListener("click", () => {
  runTask(taskCompleted);
});
