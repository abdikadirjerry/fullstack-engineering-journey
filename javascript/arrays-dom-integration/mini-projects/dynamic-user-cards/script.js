// ======================================
// DYNAMIC USER CARDS
// ======================================

// User data
const users = [
  {
    name: "Ahmed",
    role: "Frontend Developer",
  },

  {
    name: "Fatima",
    role: "UI/UX Designer",
  },

  {
    name: "Ali",
    role: "Backend Developer",
  },
];

// DOM container
const userContainer = document.getElementById("user-container");

// ======================================
// RENDER USER CARDS
// ======================================

function renderUsers() {
  users.forEach((user) => {
    // Create card
    const card = document.createElement("div");

    card.classList.add("card");

    // Create user content
    card.innerHTML = `
      <h3>${user.name}</h3>
      <p>${user.role}</p>
    `;

    // Append to UI
    userContainer.appendChild(card);
  });
}

// Initial render
renderUsers();
