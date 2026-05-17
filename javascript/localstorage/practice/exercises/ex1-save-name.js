// ======================================
// EXERCISE 1
// SAVE & DISPLAY USERNAME
// ======================================

// Save username
localStorage.setItem("name", "Fatima");

// Retrieve username
const savedName = localStorage.getItem("name");

// Display result
console.log(`Saved User: ${savedName}`);
