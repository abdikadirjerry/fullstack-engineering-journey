const taskForm = document.querySelector("#task-form");
const taskTitleInput = document.querySelector("#task-title");
const taskDescriptionInput = document.querySelector("#task-description");
const taskPriorityInput = document.querySelector("#task-priority");
const taskDueDateInput = document.querySelector("#task-due-date");
const taskList = document.querySelector("#task-list");
const formMessage = document.querySelector("#form-message");
const submitButton = taskForm.querySelector('button[type="submit"]');

const totalTasksElement = document.querySelector("#total-count");
const completedTasksElement = document.querySelector("#completed-count");
const pendingTasksElement = document.querySelector("#active-count");
const currentDateElement = document.querySelector("#header-date");
const overdueTasksElement = document.querySelector("#overdue-count");
const completionPercentElement = document.querySelector("#completion-percent");
const progressBarElement = document.querySelector("#completion-progress");
const progressTrackElement = document.querySelector(".progress-track");

const searchInput = document.querySelector("#task-search");
const filterButtons = document.querySelectorAll("[data-filter]");
const taskControls = document.querySelector(".task-controls");

const STORAGE_KEY = "taskflow-tasks";

let tasks = [];
let editingTaskId = null;
let currentFilter = "all";
let searchQuery = "";
let priorityFilter = "all";
let sortMode = "newest";

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

// Save the current task list to the browser's local storage.
function saveTasks() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    return true;
  } catch (error) {
    console.error("Unable to save tasks:", error);
    showFormMessage(
      "Tasks could not be saved. Check your browser storage settings.",
      "error",
    );
    return false;
  }
}

// Load previously saved tasks when the app starts.
function loadTasks() {
  try {
    const savedTasks = localStorage.getItem(STORAGE_KEY);

    if (!savedTasks) {
      tasks = [];
      return;
    }

    const parsedTasks = JSON.parse(savedTasks);

    if (!Array.isArray(parsedTasks)) {
      throw new Error("Saved task data is not a valid list.");
    }

    // Keep only task records with the expected basic structure.
    tasks = parsedTasks.filter((task) => {
      return (
        task &&
        typeof task.id === "string" &&
        typeof task.title === "string" &&
        typeof task.description === "string" &&
        ["low", "medium", "high"].includes(task.priority) &&
        typeof task.completed === "boolean" &&
        typeof task.createdAt === "string" &&
        (typeof task.dueDate === "string" || task.dueDate === "")
      );
    });
  } catch (error) {
    console.error("Unable to load saved tasks:", error);
    tasks = [];
    showFormMessage(
      "Saved tasks could not be read. A new task list has been started.",
      "error",
    );
  }
}

function formatDueDate(dateString) {
  if (!dateString) {
    return "No due date";
  }

  const date = new Date(`${dateString}T00:00:00`);

  if (Number.isNaN(date.getTime())) {
    return "Invalid due date";
  }

  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function getTodayDateString() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function getDueDateStatus(task) {
  if (!task.dueDate) {
    return { className: "no-due-date", label: "No due date" };
  }

  if (task.completed) {
    return {
      className: "due-completed",
      label: `Due ${formatDueDate(task.dueDate)}`,
    };
  }

  const today = getTodayDateString();

  if (task.dueDate < today) {
    return {
      className: "due-overdue",
      label: `Overdue · ${formatDueDate(task.dueDate)}`,
    };
  }

  if (task.dueDate === today) {
    return {
      className: "due-today",
      label: "Due today",
    };
  }

  return {
    className: "due-upcoming",
    label: `Due ${formatDueDate(task.dueDate)}`,
  };
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
  taskCheckbox.dataset.action = "toggle";
  taskCheckbox.setAttribute("aria-pressed", String(task.completed));
  taskCheckbox.setAttribute(
    "aria-label",
    `${task.completed ? "Mark as active" : "Mark as completed"}: ${task.title}`,
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

  const dueDateStatus = getDueDateStatus(task);
  const dueDate = document.createElement("span");
  dueDate.className = `task-due-date ${dueDateStatus.className}`;
  dueDate.textContent = dueDateStatus.label;

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

function getFilteredTasks() {
  const filteredTasks = tasks.filter((task) => {
    const matchesStatus =
      currentFilter === "all" ||
      (currentFilter === "active" && !task.completed) ||
      (currentFilter === "completed" && task.completed);

    const searchableText = `${task.title} ${task.description}`.toLowerCase();
    const matchesSearch = searchableText.includes(searchQuery);

    const matchesPriority =
      priorityFilter === "all" || task.priority === priorityFilter;

    return matchesStatus && matchesSearch && matchesPriority;
  });

  const priorityOrder = { high: 3, medium: 2, low: 1 };

  filteredTasks.sort((a, b) => {
    if (sortMode === "priority") {
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    }

    if (sortMode === "due-date") {
      if (!a.dueDate && !b.dueDate) return 0;
      if (!a.dueDate) return 1;
      if (!b.dueDate) return -1;
      return a.dueDate.localeCompare(b.dueDate);
    }

    if (sortMode === "oldest") {
      return new Date(a.createdAt) - new Date(b.createdAt);
    }

    return new Date(b.createdAt) - new Date(a.createdAt);
  });

  return filteredTasks;
}

function renderTasks() {
  taskList.innerHTML = "";

  const filteredTasks = getFilteredTasks();

  if (filteredTasks.length === 0) {
    const emptyState = document.createElement("div");
    emptyState.className = "empty-state";

    if (tasks.length === 0) {
      emptyState.textContent = "No tasks yet. Add your first task!";
    } else {
      emptyState.textContent = "No tasks match your search or filters.";
    }

    taskList.append(emptyState);
  } else {
    taskList.append(...filteredTasks.map(createTaskElement));
  }

  updateTaskStatistics();
}

function updateTaskStatistics() {
  const total = tasks.length;
  const completed = tasks.filter((task) => task.completed).length;
  const pending = total - completed;
  const today = getTodayDateString();
  const overdue = tasks.filter(
    (task) => !task.completed && task.dueDate && task.dueDate < today,
  ).length;
  const completionPercent =
    total === 0 ? 0 : Math.round((completed / total) * 100);

  totalTasksElement.textContent = total;
  completedTasksElement.textContent = completed;
  pendingTasksElement.textContent = pending;

  if (overdueTasksElement) {
    overdueTasksElement.textContent = overdue;
  }

  if (completionPercentElement) {
    completionPercentElement.textContent = `${completionPercent}%`;
  }

  if (progressBarElement) {
    progressBarElement.style.width = `${completionPercent}%`;
    if (progressTrackElement) {
      progressTrackElement.setAttribute(
        "aria-valuenow",
        String(completionPercent),
      );
      progressTrackElement.setAttribute(
        "aria-label",
        `Task completion: ${completionPercent}%`,
      );
    }
  }

  const taskCountBadge = document.querySelector("#task-count-badge");
  const listSummary = document.querySelector("#list-summary");
  const visibleCount = getFilteredTasks().length;

  if (taskCountBadge) {
    taskCountBadge.textContent = `${total} ${total === 1 ? "task" : "tasks"}`;
  }

  if (listSummary) {
    listSummary.textContent = `Showing ${visibleCount} of ${total} ${
      total === 1 ? "task" : "tasks"
    }`;
  }
}

function updateActiveFilterButton() {
  filterButtons.forEach((button) => {
    const isActive = button.dataset.filter === currentFilter;

    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
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
  saveTasks();
  renderTasks();
  showFormMessage("Task added successfully!", "success");
  taskForm.reset();
  taskTitleInput.focus();
}

function startEditingTask(taskId) {
  const task = tasks.find((item) => item.id === taskId);

  if (!task) return;

  editingTaskId = taskId;
  taskTitleInput.value = task.title;
  taskDescriptionInput.value = task.description;
  taskPriorityInput.value = task.priority;
  taskDueDateInput.value = task.dueDate;

  submitButton.textContent = "Save Changes";
  showFormMessage("Editing task. Update the fields and save.", "success");

  taskTitleInput.focus();
  taskForm.scrollIntoView({ behavior: "smooth", block: "center" });
}

function updateTask(taskId, title, description, priority, dueDate) {
  const task = tasks.find((item) => item.id === taskId);

  if (!task) return;

  task.title = title.trim();
  task.description = description.trim();
  task.priority = priority;
  task.dueDate = dueDate;

  saveTasks();
  renderTasks();
  resetTaskForm();
  showFormMessage("Task updated successfully!", "success");
}

function deleteTask(taskId) {
  const task = tasks.find((item) => item.id === taskId);

  if (!task) return;

  const confirmed = window.confirm(
    `Are you sure you want to delete "${task.title}"?`,
  );

  if (!confirmed) return;

  tasks = tasks.filter((item) => item.id !== taskId);

  if (editingTaskId === taskId) {
    resetTaskForm();
  }

  saveTasks();
  renderTasks();
  showFormMessage("Task deleted successfully.", "success");
}

function toggleTaskCompletion(taskId) {
  const task = tasks.find((item) => item.id === taskId);

  if (!task) return;

  task.completed = !task.completed;
  saveTasks();
  renderTasks();
}

function handleTaskListClick(event) {
  const actionButton = event.target.closest("[data-action]");
  const taskItem = event.target.closest("[data-task-id]");

  if (!actionButton || !taskItem) return;

  const taskId = taskItem.dataset.taskId;
  const action = actionButton.dataset.action;

  if (action === "toggle") toggleTaskCompletion(taskId);
  if (action === "edit") startEditingTask(taskId);
  if (action === "delete") deleteTask(taskId);
}

function handleFilterClick(event) {
  const clickedButton = event.target.closest("[data-filter]");

  if (!clickedButton) return;

  currentFilter = clickedButton.dataset.filter;
  updateActiveFilterButton();
  renderTasks();
}

function handleSearchInput(event) {
  searchQuery = event.target.value.trim().toLowerCase();
  renderTasks();
}

function handlePriorityFilterChange(event) {
  priorityFilter = event.target.value;
  renderTasks();
}

function handleSortChange(event) {
  sortMode = event.target.value;
  renderTasks();
}

function addPriorityAndSortControls() {
  if (!taskControls) return;

  // Avoid creating duplicate controls if initialization is repeated.
  if (document.querySelector("#priority-filter")) return;

  const extraControls = document.createElement("div");
  extraControls.className = "task-extra-controls";

  const priorityLabel = document.createElement("label");
  priorityLabel.className = "task-control-label";
  priorityLabel.textContent = "Priority";

  const prioritySelect = document.createElement("select");
  prioritySelect.id = "priority-filter";
  prioritySelect.className = "task-control-select";
  prioritySelect.setAttribute("aria-label", "Filter tasks by priority");

  [
    ["all", "All priorities"],
    ["high", "High priority"],
    ["medium", "Medium priority"],
    ["low", "Low priority"],
  ].forEach(([value, label]) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = label;
    prioritySelect.append(option);
  });

  priorityLabel.append(prioritySelect);

  const sortLabel = document.createElement("label");
  sortLabel.className = "task-control-label";
  sortLabel.textContent = "Sort by";

  const sortSelect = document.createElement("select");
  sortSelect.id = "task-sort";
  sortSelect.className = "task-control-select";
  sortSelect.setAttribute("aria-label", "Sort tasks");

  [
    ["newest", "Newest first"],
    ["oldest", "Oldest first"],
    ["priority", "Priority: High to Low"],
    ["due-date", "Due date: Earliest first"],
  ].forEach(([value, label]) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = label;
    sortSelect.append(option);
  });

  sortLabel.append(sortSelect);
  extraControls.append(priorityLabel, sortLabel);
  taskControls.append(extraControls);

  prioritySelect.addEventListener("change", handlePriorityFilterChange);
  sortSelect.addEventListener("change", handleSortChange);
}

function handleTaskFormSubmit(event) {
  event.preventDefault();
  clearFormMessage();

  const title = taskTitleInput.value;
  const description = taskDescriptionInput.value;
  const priority = taskPriorityInput.value;
  const dueDate = taskDueDateInput.value;

  if (!validateTaskTitle(title)) return;

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
  loadTasks();
  addPriorityAndSortControls();
  updateActiveFilterButton();
  renderTasks();

  taskForm.addEventListener("submit", handleTaskFormSubmit);
  taskTitleInput.addEventListener("input", handleTitleInput);
  taskList.addEventListener("click", handleTaskListClick);
  searchInput.addEventListener("input", handleSearchInput);

  filterButtons.forEach((button) => {
    button.addEventListener("click", handleFilterClick);
  });
}

initializeApp();
