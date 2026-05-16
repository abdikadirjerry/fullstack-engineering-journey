// ======================================
// EXERCISE 3
// SAVE ARRAY
// ======================================

// Skills array
const skills = ["HTML", "CSS", "JavaScript"];

// Save array
localStorage.setItem("skills", JSON.stringify(skills));

// Retrieve array
const savedSkills = JSON.parse(localStorage.getItem("skills"));

console.log(savedSkills);
