"use strict";

// =========================================
// 1. DOM ELEMENTS
// =========================================

const headerDate = document.querySelector("#header-date");
const taskForm = document.querySelector("#task-form");
const taskList = document.querySelector("#task-list");
const taskTitleInput = document.querySelector("#task-title");
const taskDescriptionInput = document.querySelector("#task-description");
const taskPriorityInput = document.querySelector("#task-priority");
const taskDueDateInput = document.querySelector("#task-due-date");
const formMessage = document.querySelector("#form-message");

const totalCount = document.querySelector("#total-count");
const activeCount = document.querySelector("#active-count");
const completedCount = document.querySelector("#completed-count");
const taskCountBadge = document.querySelector("#task-count-badge");
const listSummary = document.querySelector("#list-summary");

// =========================================
// 2. APPLICATION DATA
// =========================================

// Each task is an object stored in this array.

let tasks = [];

// =========================================
// 3. DISPLAY CURRENT DATE
// =========================================

function displayCurrentDate() {
  if (!headerDate) {
    console.error("TaskFlow: Date element not found.");
    return;
  }

  const today = new Date();

  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  headerDate.textContent = formattedDate;
}

// =========================================
// 4. GENERATE UNIQUE TASK IDS
// =========================================

function generateTaskId() {
  if (
    typeof crypto !== "undefined" &&
    typeof crypto.randomUUID === "function"
  ) {
    return crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

// =========================================
// 5. DISPLAY FORM MESSAGES
// =========================================

function showFormMessage(message, type) {
  formMessage.textContent = message;
  formMessage.className = `form-message ${type}`;
}

function clearFormMessage() {
  formMessage.textContent = "";
  formMessage.className = "form-message";
}

// =========================================
// 6. VALIDATE TASK TITLE
// =========================================

function validateTaskTitle(title) {
  if (!title) {
    return "Please enter a task name.";
  }

  if (title.length > 100) {
    return "Task name cannot exceed 100 characters.";
  }

  return "";
}

// =========================================
// 7. CREATE A TASK OBJECT
// =========================================

function createTask(title, description, priority, dueDate) {
  return {
    id: generateTaskId(),
    title: title,
    description: description,
    priority: priority,
    dueDate: dueDate,
    completed: false,
    createdAt: new Date().toISOString(),
  };
}

// =========================================
// 8. FORMAT TASK DUE DATE
// =========================================

function formatDueDate(dateString) {
  if (!dateString) {
    return "";
  }

  // Parse the date components locally to avoid
  // timezone shifts from parsing a date-only string.
  const [year, month, day] = dateString.split("-").map(Number);
  const date = new Date(year, month - 1, day);

  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

// =========================================
// 9. CREATE TASK ELEMENT
// =========================================

function createTaskElement(task) {
  const article = document.createElement("article");
  article.className = task.completed ? "task-item completed" : "task-item";

  const checkbox = document.createElement("div");
  checkbox.className = task.completed
    ? "task-checkbox checked"
    : "task-checkbox";

  checkbox.setAttribute("aria-hidden", "true");

  if (task.completed) {
    checkbox.textContent = "✓";
  }

  const content = document.createElement("div");
  content.className = "task-content";

  const title = document.createElement("h3");
  title.textContent = task.title;

  const description = document.createElement("p");
  description.textContent = task.description || "No description";

  content.append(title, description);

  if (task.dueDate) {
    const dueDate = document.createElement("p");
    dueDate.className = "task-due-date";
    dueDate.textContent = `Due: ${formatDueDate(task.dueDate)}`;
    content.append(dueDate);
  }

  const priority = document.createElement("span");
  priority.className = `priority-badge priority-${task.priority}`;

  const priorityLabels = {
    low: "Low",
    medium: "Medium",
    high: "High",
  };

  priority.textContent = priorityLabels[task.priority] || "Medium";

  article.append(checkbox, content, priority);

  return article;
}

// =========================================
// 10. RENDER TASKS
// =========================================

function renderTasks() {
  taskList.replaceChildren();

  if (tasks.length === 0) {
    const emptyState = document.createElement("div");
    emptyState.className = "empty-state";

    const icon = document.createElement("div");
    icon.className = "empty-state-icon";
    icon.textContent = "✓";
    icon.setAttribute("aria-hidden", "true");

    const heading = document.createElement("h3");
    heading.textContent = "No tasks yet";

    const description = document.createElement("p");
    description.textContent =
      "Add your first task using the form to get started.";

    emptyState.append(icon, heading, description);
    taskList.append(emptyState);
  } else {
    const taskElements = tasks.map(createTaskElement);
    taskList.append(...taskElements);
  }

  updateTaskStatistics();
}

// =========================================
// 11. UPDATE TASK STATISTICS
// =========================================

function updateTaskStatistics() {
  const total = tasks.length;

  const completed = tasks.filter(function (task) {
    return task.completed;
  }).length;

  const active = total - completed;

  totalCount.textContent = total;
  activeCount.textContent = active;
  completedCount.textContent = completed;

  taskCountBadge.textContent = `${total} ${total === 1 ? "task" : "tasks"}`;

  listSummary.textContent = `Showing ${total} ${total === 1 ? "task" : "tasks"}`;
}

// =========================================
// 12. HANDLE TASK FORM SUBMISSION
// =========================================

function handleTaskSubmission(event) {
  event.preventDefault();

  clearFormMessage();

  const title = taskTitleInput.value.trim();
  const description = taskDescriptionInput.value.trim();
  const priority = taskPriorityInput.value;
  const dueDate = taskDueDateInput.value;

  // Validate the task title.
  const validationError = validateTaskTitle(title);

  if (validationError) {
    taskTitleInput.classList.add("invalid");
    taskTitleInput.focus();

    showFormMessage(validationError, "error");
    return;
  }

  taskTitleInput.classList.remove("invalid");

  // Create the task object.
  const newTask = createTask(title, description, priority, dueDate);

  // Add the task to the array.
  tasks.push(newTask);

  // Update the task list and statistics.
  renderTasks();

  // Clear the form after successful submission.
  taskForm.reset();
  taskTitleInput.focus();

  // Inform the user.
  showFormMessage("Your task has been added successfully!", "success");

  console.log("Task created:", newTask);
  console.log("Current tasks:", tasks);
}

// =========================================
// 13. HANDLE INPUT CHANGES
// =========================================

function handleTitleInput() {
  taskTitleInput.classList.remove("invalid");

  if (formMessage.classList.contains("error")) {
    clearFormMessage();
  }
}

// =========================================
// 14. INITIALIZE APPLICATION
// =========================================

function initializeApp() {
  if (
    !headerDate ||
    !taskForm ||
    !taskList ||
    !taskTitleInput ||
    !taskDescriptionInput ||
    !taskPriorityInput ||
    !taskDueDateInput ||
    !formMessage ||
    !totalCount ||
    !activeCount ||
    !completedCount ||
    !taskCountBadge ||
    !listSummary
  ) {
    console.error("TaskFlow: Required application elements are missing.");
    return;
  }

  displayCurrentDate();

  // Listen for task form submissions.
  taskForm.addEventListener("submit", handleTaskSubmission);

  // Clear validation feedback as the user types.
  taskTitleInput.addEventListener("input", handleTitleInput);

  // Display the initial empty task list.
  renderTasks();

  console.log("TaskFlow Part 3 initialized successfully.");
}

// =========================================
// 15. START APPLICATION
// =========================================

initializeApp();
