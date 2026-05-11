// ================================
// DOM ELEMENTS
// ================================

const title = document.getElementById("title");

const button = document.getElementById("change-btn");

// ================================
// TEXT OPTIONS
// ================================

const messages = [
  "DOM is Awesome!",
  "JavaScript Updated This Text!",
  "Learning DOM Manipulation 🚀",
  "Text Changed Successfully!",
];

// Track current message
let currentIndex = 0;

// ================================
// CHANGE TEXT
// ================================

button.addEventListener("click", () => {
  // Update current index
  currentIndex++;

  // Restart from beginning
  if (currentIndex >= messages.length) {
    currentIndex = 0;
  }

  // Change title text
  title.innerText = messages[currentIndex];
});
