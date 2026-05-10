// Select elements
const textarea = document.getElementById("textarea");
const count = document.getElementById("count");

// Update character count
textarea.addEventListener("input", () => {
  count.innerText = textarea.value.length;
});
