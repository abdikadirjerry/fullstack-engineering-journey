// ======================================
// EXERCISE 1
// DOM ELEMENT SELECTION
// ======================================

// ❓ Task:
// Select the heading element using:
// 1. getElementById()
// 2. querySelector()

// ======================================
// HTML EXAMPLE
// ======================================

// <h1 id="title">DOM Basics</h1>

// ======================================
// SOLUTION
// ======================================

// Select using getElementById
const headingById = document.getElementById("title");

// Select using querySelector
const headingByQuery = document.querySelector("#title");

// Print elements
console.log("Using ID:");
console.log(headingById);

console.log("Using Query Selector:");
console.log(headingByQuery);

// ======================================
// EXPECTED OUTPUT
// ======================================

// <h1 id="title">DOM Basics</h1>
