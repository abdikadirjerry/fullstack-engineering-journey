/**
 * TASK MANAGER
 * Demonstrates immutable state management using the Spread Operator.
 */
class TaskManager {
  constructor() {
    this.tasks = [];
  }

  addTask(taskName) {
    const newTask = { name: taskName, id: Date.now(), completed: false };

    // Using spread to create a new array instead of .push() (Functional approach)
    this.tasks = [...this.tasks, newTask];
    console.log(`Task Added: ${taskName}`);
  }

  toggleTask(taskId) {
    this.tasks = this.tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task,
    );
  }

  listTasks() {
    console.log("--- My Tasks ---");
    this.tasks.forEach((t) =>
      console.log(`[${t.completed ? "✓" : " "}] ${t.name}`),
    );
  }
}

const app = new TaskManager();
app.addTask("Learn Spread Operator");
app.addTask("Practice Rest Parameters");
app.listTasks();
