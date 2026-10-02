"use strict";

// =========================================
// 1. DOM ELEMENTS
// =========================================

const headerDate = document.querySelector("#header-date");
const taskForm = document.querySelector("#task-form");
const taskList = document.querySelector("#task-list");

// =========================================
// 2. DISPLAY CURRENT DATE
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
// 3. INITIALIZE APPLICATION
// =========================================

function initializeApp() {
  if (!taskForm || !taskList) {
    console.error("TaskFlow: Required dashboard elements are missing.");
    return;
  }

  displayCurrentDate();

  console.log("TaskFlow dashboard initialized successfully.");
}

// =========================================
// 4. START APPLICATION
// =========================================

initializeApp();
