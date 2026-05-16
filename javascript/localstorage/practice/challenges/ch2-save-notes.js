// ======================================
// CHALLENGE 2
// SAVE NOTES
// ======================================

// DOM elements
const textarea = document.getElementById("notes");

// Load saved notes
textarea.value = localStorage.getItem("notes") || "";

// Save notes while typing
textarea.addEventListener("input", () => {
  localStorage.setItem("notes", textarea.value);
});
