// ======================================
// RENDER USERS
// ======================================

const users = ["Ali", "Ahmed", "Fatima"];

const container = document.getElementById("users");

// Render users
users.forEach((user) => {
  const paragraph = document.createElement("p");

  paragraph.innerText = user;

  container.appendChild(paragraph);
});
