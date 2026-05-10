/* Expected HTML:
  <input type="text" id="name-input" placeholder="Enter your name" />
  <h2>Preview: <span id="name-preview"></span></h2>
*/

// ❓ Create live text preview while typing
const nameInput = document.getElementById("name-input");
const namePreview = document.getElementById("name-preview");

nameInput.addEventListener("input", () => {
  // Update the preview span with the current value of the input field
  // If the input is empty, fallback to a default string or empty space
  namePreview.innerText = nameInput.value;
});
