// ======================================
// ASYNC TASK SIMULATOR
// ======================================

const button = document.getElementById("start-btn");

const status = document.getElementById("status");

function runTask() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task Completed Successfully");
    }, 4000);
  });
}

async function startTask() {
  status.innerText = "Processing Task...";

  const result = await runTask();

  status.innerText = result;
}

button.addEventListener("click", startTask);
