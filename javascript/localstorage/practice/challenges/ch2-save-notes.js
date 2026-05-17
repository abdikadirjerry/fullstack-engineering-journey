// ======================================
// CHALLENGE 2
// AUTO SAVE NOTES WITH STATUS
// ======================================

// DOM elements
const textarea = document.getElementById("notes");

const status = document.getElementById("status");

// Load saved notes
textarea.value = localStorage.getItem("notes") || "";

// Save notes
textarea.addEventListener("input", () => {
  localStorage.setItem("notes", textarea.value);

  // Update status
  status.innerText = "Notes saved successfully";
});
