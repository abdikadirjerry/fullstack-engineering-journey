
const taskForm = document.querySelector("#task-form");
const taskTitleInput = document.querySelector("#task-title");
const taskDescriptionInput = document.querySelector("#task-description");
const taskPriorityInput = document.querySelector("#task-priority");
const taskDueDateInput = document.querySelector("#task-due-date");
const taskList = document.querySelector("#task-list");
const formMessage = document.querySelector("#form-message");
const submitButton = taskForm.querySelector('button[type="submit"]');

const totalTasksElement = document.querySelector("#total-tasks");
const completedTasksElement = document.querySelector("#completed-tasks");
const pendingTasksElement = document.querySelector("#pending-tasks");
const currentDateElement = document.querySelector("#current-date");

let tasks = [];
let editingTaskId = null;

function displayCurrentDate() {
  const today = new Date();

  currentDateElement.textContent = today.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function generateTaskId() {
  if (crypto.randomUUID) {
    return crypto.randomUUID();
  }

  return `${Date.now()}-${Math.floor(Math.random() * 100000)}`;
}

function showFormMessage(message, type) {
  formMessage.textContent = message;
  formMessage.className = `form-message ${type}`;
}

function clearFormMessage() {
  formMessage.textContent = "";
  formMessage.className = "form-message";
}

function resetTaskForm() {
  taskForm.reset();
  editingTaskId = null;
  submitButton.textContent = "Add Task";
  clearFormMessage();
  taskTitleInput.classList.remove("invalid");
}

function validateTaskTitle(title) {
  if (!title.trim()) {
    showFormMessage("Please enter a task title.", "error");
    taskTitleInput.classList.add("invalid");
    taskTitleInput.focus();
    return false;
  }

  if (title.trim().length > 100) {
    showFormMessage("Task title must be 100 characters or fewer.", "error");
    taskTitleInput.classList.add("invalid");
    taskTitleInput.focus();
    return false;
  }

  taskTitleInput.classList.remove("invalid");
  return true;
}

function formatDueDate(dateString) {
  if (!dateString) {
    return "No due date";
  }

  const date = new Date(`${dateString}T00:00:00`);

  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function createTaskElement(task) {
  const taskItem = document.createElement("article");
  taskItem.className = `task-item ${task.completed ? "completed" : ""}`;
  taskItem.dataset.taskId = task.id;

  const taskMain = document.createElement("div");
  taskMain.className = "task-main";

  const taskCheckbox = document.createElement("button");
  taskCheckbox.type = "button";
  taskCheckbox.className = `task-checkbox ${task.completed ? "checked" : ""}`;
  taskCheckbox.dataset-action = "toggle";
  taskCheckbox.setAttribute("aria-pressed", String(task.completed));
  taskCheckbox.setAttribute(
    "aria-label",
    `${task.completed ? "Mark as active" : "Mark as completed"}: ${task.title}`
  );

  const taskContent = document.createElement("div");
  taskContent.className = "task-content";

  const taskTitle = document.createElement("h3");
  taskTitle.className = "task-title";
  taskTitle.textContent = task.title;

  const taskDescription = document.createElement("p");
  taskDescription.className = "task-description";
  taskDescription.textContent = task.description || "";

  const taskMeta = document.createElement("div");
  taskMeta.className = "task-meta";

  const priorityBadge = document.createElement("span");
  priorityBadge.className = `priority-badge priority-${task.priority}`;
  priorityBadge.textContent =
    task.priority.charAt(0).toUpperCase() + task.priority.slice(1);

  const dueDate = document.createElement("span");
  dueDate.className = "task-due-date";
  dueDate.textContent = formatDueDate(task.dueDate);

  taskMeta.append(priorityBadge, dueDate);
  taskContent.append(taskTitle);

  if (task.description) {
    taskContent.append(taskDescription);
  }

  taskContent.append(taskMeta);
  taskMain.append(taskCheckbox, taskContent);

  const taskActions = document.createElement("div");
  taskActions.className = "task-actions";

  const editButton = document.createElement("button");
  editButton.type = "button";
  editButton.className = "task-action-button edit-task";
  editButton.dataset.action = "edit";
  editButton.textContent = "Edit";
  editButton.setAttribute("aria-label", `Edit task: ${task.title}`);

  const deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.className = "task-action-button delete-task";
  deleteButton.dataset.action = "delete";
  deleteButton.textContent = "Delete";
  deleteButton.setAttribute("aria-label", `Delete task: ${task.title}`);

  taskActions.append(editButton, deleteButton);
  taskItem.append(taskMain, taskActions);

  return taskItem;
}

function renderTasks() {
  taskList.innerHTML = "";

  if (tasks.length === 0) {
    const emptyState = document.createElement("div");
    emptyState.className = "empty-state";
    emptyState.textContent = "No tasks yet. Add your first task!";
    taskList.append(emptyState);
  } else {
    const taskElements = tasks.map(createTaskElement);
    taskList.append(...taskElements);
  }

  updateTaskStatistics();
}

function updateTaskStatistics() {
  const total = tasks.length;
  const completed = tasks.filter((task) => task.completed).length;
  const pending = total - completed;

  totalTasksElement.textContent = total;
  completedTasksElement.textContent = completed;
  pendingTasksElement.textContent = pending;
}

function createTask(title, description, priority, dueDate) {
  const task = {
    id: generateTaskId(),
    title: title.trim(),
    description: description.trim(),
    priority,
    dueDate,
    completed: false,
    createdAt: new Date().toISOString(),
  };

  tasks.unshift(task);
  renderTasks();
  showFormMessage("Task added successfully!", "success");
  taskForm.reset();
  taskTitleInput.focus();
}

function startEditingTask(taskId) {
  const task = tasks.find((item) => item.id === taskId);

  if (!task) {
    return;
  }

  editingTaskId = taskId;
  taskTitleInput.value = task.title;
  taskDescriptionInput.value = task.description;
  taskPriorityInput.value = task.priority;
  taskDueDateInput.value = task.dueDate;

  submitButton.textContent = "Save Changes";
  showFormMessage("Editing task. Update the fields and save.", "success");

  taskTitleInput.focus();
  taskForm.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
}

function updateTask(taskId, title, description, priority, dueDate) {
  const task = tasks.find((item) => item.id === taskId);

  if (!task) {
    return;
  }

  task.title = title.trim();
  task.description = description.trim();
  task.priority = priority;
  task.dueDate = dueDate;

  renderTasks();
  resetTaskForm();
  showFormMessage("Task updated successfully!", "success");
}

function deleteTask(taskId) {
  const task = tasks.find((item) => item.id === taskId);

  if (!task) {
    return;
  }

  const confirmed = window.confirm(
    `Are you sure you want to delete "${task.title}"?`
  );

  if (!confirmed) {
    return;
  }

  tasks = tasks.filter((item) => item.id !== taskId);

  if (editingTaskId === taskId) {
    resetTaskForm();
  }

  renderTasks();
  showFormMessage("Task deleted successfully.", "success");
}

function toggleTaskCompletion(taskId) {
  const task = tasks.find((item) => item.id === taskId);

  if (!task) {
    return;
  }

  task.completed = !task.completed;
  renderTasks();
}

function handleTaskListClick(event) {
  const actionButton = event.target.closest("[data-action]");
  const taskItem = event.target.closest("[data-task-id]");

  if (!actionButton || !taskItem) {
    return;
  }

  const taskId = taskItem.dataset.taskId;
  const action = actionButton.dataset.action;

  if (action === "toggle") {
    toggleTaskCompletion(taskId);
  }

  if (action === "edit") {
    startEditingTask(taskId);
  }

  if (action === "delete") {
    deleteTask(taskId);
  }
}

function handleTaskFormSubmit(event) {
  event.preventDefault();
  clearFormMessage();

  const title = taskTitleInput.value;
  const description = taskDescriptionInput.value;
  const priority = taskPriorityInput.value;
  const dueDate = taskDueDateInput.value;

  if (!validateTaskTitle(title)) {
    return;
  }

  if (editingTaskId) {
    updateTask(editingTaskId, title, description, priority, dueDate);
  } else {
    createTask(title, description, priority, dueDate);
  }
}

function handleTitleInput() {
  taskTitleInput.classList.remove("invalid");

  if (formMessage.classList.contains("error")) {
    clearFormMessage();
  }
}

function initializeApp() {
  displayCurrentDate();
  renderTasks();

  taskForm.addEventListener("submit", handleTaskFormSubmit);
  taskTitleInput.addEventListener("input", handleTitleInput);
  taskList.addEventListener("click", handleTaskListClick);
}

initializeApp();