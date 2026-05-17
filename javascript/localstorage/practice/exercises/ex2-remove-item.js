// ======================================
// EXERCISE 2
// REMOVE LOCALSTORAGE ITEM
// ======================================

// Save course
localStorage.setItem("course", "JavaScript");

// Show before removing
console.log(localStorage.getItem("course"));

// Remove item
localStorage.removeItem("course");

// Show after removing
console.log(localStorage.getItem("course"));
