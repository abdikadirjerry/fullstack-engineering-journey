// ================================
// DOM ELEMENTS
// ================================

const textarea = document.getElementById("textarea");

const count = document.getElementById("count");

// Maximum characters allowed
const maxCharacters = 100;

// ================================
// UPDATE CHARACTER COUNT
// ================================

textarea.addEventListener("input", () => {
  // Current length
  const currentLength = textarea.value.length;

  // Update UI
  count.innerText = currentLength;

  // Prevent extra characters
  if (currentLength > maxCharacters) {
    textarea.value = textarea.value.slice(0, maxCharacters);

    count.innerText = maxCharacters;
  }
});
