// Select elements
const title = document.getElementById("title");
const button = document.getElementById("change-btn");

// Handle click event
button.addEventListener("click", () => {
  title.innerText = "Text Changed Successfully!";
});
