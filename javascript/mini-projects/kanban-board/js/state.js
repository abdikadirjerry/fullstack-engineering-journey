import { Storage } from "./storage.js";

const STORAGE_KEY = "kanban-tasks";
let tasks = Storage.get(STORAGE_KEY, []);

export function addTask(text) {
  const newTask = {
    id: "task-" + crypto.randomUUID(),
    text: text,
    status: "todo", // Default starting column
  };
  tasks.push(newTask);
  Storage.set(STORAGE_KEY, tasks);
  return newTask;
}

export function updateTaskStatus(id, newStatus) {
  const taskIndex = tasks.findIndex((t) => t.id === id);
  if (taskIndex > -1) {
    tasks[taskIndex].status = newStatus;
    Storage.set(STORAGE_KEY, tasks);
  }
}

export function deleteTask(id) {
  tasks = tasks.filter((t) => t.id !== id);
  Storage.set(STORAGE_KEY, tasks);
}

export function getTasks() {
  return [...tasks];
}
