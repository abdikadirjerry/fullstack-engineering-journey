// ❓ Print input value while typing.
const input = document.querySelector("#user-input");

input.addEventListener("input", (e) => {
  console.log(e.target.value);
});
