// ======================================
// EXERCISE 2
// CHANGE TEXT CONTENT
// ======================================

// ❓ Task:
// Change heading text using:
// - innerText
// - innerHTML

// ======================================
// HTML EXAMPLE
// ======================================

// <h1 id="heading">Old Title</h1>

// ======================================
// SELECT ELEMENT
// ======================================

const heading = document.getElementById("heading");

// ======================================
// CHANGE TEXT
// ======================================

// Change plain text
heading.innerText = "DOM Manipulation Updated";

// Wait 2 seconds
setTimeout(() => {
  // Change HTML structure
  heading.innerHTML = `
    <span>
      Updated with innerHTML 🚀
    </span>
  `;
}, 2000);

// ======================================
// EXPECTED RESULT
// ======================================

// Text changes immediately,
// then updates again after 2 seconds.
