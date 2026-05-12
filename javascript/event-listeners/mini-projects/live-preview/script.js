// ======================================
// DOM ELEMENTS
// ======================================

const input = document.getElementById("input");

const preview = document.getElementById("preview");

// ======================================
// LIVE PREVIEW EVENT
// ======================================

input.addEventListener("input", () => {
  const value = input.value.trim();

  if (value === "") {
    preview.innerText = "Your text will appear here";

    return;
  }

  preview.innerText = value;
});
