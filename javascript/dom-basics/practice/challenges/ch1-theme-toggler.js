/* Expected HTML:
  <button id="theme-btn">Toggle Dark Mode</button>
*/

// ❓ Create button that toggles page background color
const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", () => {
  // Check the current background color and toggle it
  if (document.body.style.backgroundColor === "black") {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  } else {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  }
});
