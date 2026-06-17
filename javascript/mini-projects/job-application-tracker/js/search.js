const searchInput = document.getElementById("search");

searchInput.addEventListener("input", function () {
  const keyword = this.value.toLowerCase();

  const items = document.querySelectorAll("#application-list li");

  items.forEach((item) => {
    const text = item.textContent.toLowerCase();

    item.style.display = text.includes(keyword) ? "flex" : "none";
  });
});
