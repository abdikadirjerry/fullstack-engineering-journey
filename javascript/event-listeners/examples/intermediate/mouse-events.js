const box = document.getElementById("box");

box.addEventListener("mouseenter", () => {
  box.style.backgroundColor = "yellow";
});

box.addEventListener("mouseleave", () => {
  box.style.backgroundColor = "white";
});
