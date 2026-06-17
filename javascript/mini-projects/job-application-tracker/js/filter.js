const filter = document.getElementById("filter");

filter.addEventListener("change", function () {
  const selected = this.value;

  const items = document.querySelectorAll("#application-list li");

  items.forEach((item) => {
    if (selected === "All" || item.textContent.includes(selected)) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
});
