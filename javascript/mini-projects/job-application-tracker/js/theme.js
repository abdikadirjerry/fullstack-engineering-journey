const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  const darkMode = document.body.classList.contains("dark");

  localStorage.setItem("theme", darkMode);
});

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "true") {
  document.body.classList.add("dark");
}
