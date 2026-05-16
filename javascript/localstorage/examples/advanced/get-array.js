// ======================================
// GET ARRAY FROM LOCALSTORAGE
// ======================================

// Get tasks
const savedTasks = JSON.parse(localStorage.getItem("tasks"));

// Prevent null errors
if (savedTasks) {
  console.log(savedTasks);
} else {
  console.log("No tasks found");
}
