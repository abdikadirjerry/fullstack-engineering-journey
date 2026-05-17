// ======================================
// EXERCISE 3
// SAVE & LOOP THROUGH ARRAY
// ======================================

// Skills array
const skills = ["HTML", "CSS", "JavaScript", "React"];

// Save array
localStorage.setItem("skills", JSON.stringify(skills));

// Retrieve array
const savedSkills = JSON.parse(localStorage.getItem("skills"));

// Loop through skills
savedSkills.forEach((skill) => {
  console.log(skill);
});
