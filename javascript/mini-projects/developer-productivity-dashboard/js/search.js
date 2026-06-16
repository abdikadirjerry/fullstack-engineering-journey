const searchInput = document.getElementById("search-input");

searchInput.addEventListener("input", function () {
  const keyword = this.value.toLowerCase();

  const items = document.querySelectorAll("#task-list li");

  items.forEach((item) => {
    item.style.display = item.textContent.toLowerCase().includes(keyword)
      ? "flex"
      : "none";
  });
});
