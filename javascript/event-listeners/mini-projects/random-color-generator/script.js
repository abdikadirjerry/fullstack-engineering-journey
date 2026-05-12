// ======================================
// DOM ELEMENTS
// ======================================

const button = document.getElementById("generate-btn");

const colorCode = document.getElementById("color-code");

// ======================================
// GENERATE RANDOM COLOR
// ======================================

function generateRandomColor() {
  const red = Math.floor(Math.random() * 256);

  const green = Math.floor(Math.random() * 256);

  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
}

// ======================================
// BUTTON EVENT
// ======================================

button.addEventListener("click", () => {
  const randomColor = generateRandomColor();

  document.body.style.backgroundColor = randomColor;

  colorCode.innerText = randomColor;
});
