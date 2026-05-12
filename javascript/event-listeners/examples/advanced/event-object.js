const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    // Accessing the specific button clicked via event.target
    console.log("Button Text:", event.target.innerText);
  });
});
