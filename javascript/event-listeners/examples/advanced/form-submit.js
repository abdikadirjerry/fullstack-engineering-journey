const form = document.getElementById("login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Stop page refresh
  console.log("Form data intercepted and handled!");
});
