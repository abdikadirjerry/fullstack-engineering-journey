"use strict";

// TaskFlow application initialization

const appMessage = document.querySelector("#app-message");

function initializeApp() {
  if (!appMessage) {
    console.error("TaskFlow: Application message element not found.");
    return;
  }

  appMessage.textContent = "Welcome to TaskFlow! Your workspace is ready.";

  console.log("TaskFlow initialized successfully.");
}

initializeApp();
