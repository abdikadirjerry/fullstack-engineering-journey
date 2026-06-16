const themeButton = document.getElementById("theme-toggle");

themeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
