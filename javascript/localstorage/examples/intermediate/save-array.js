// ======================================
// SAVE ARRAY
// ======================================

// Tasks array
const tasks = ["Learn JavaScript", "Practice DOM"];

// Save tasks
localStorage.setItem("tasks", JSON.stringify(tasks));

console.log("Tasks saved");
