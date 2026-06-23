let resources = getResources();

const resourceForm = document.getElementById("resource-form");

const searchInput = document.getElementById("search");

const categoryFilter = document.getElementById("filter-category");

function createResource(title, url, category) {
  return {
    id: Date.now(),
    title,
    url,
    category,
  };
}

function addResource(event) {
  event.preventDefault();

  const title = document.getElementById("title").value.trim();

  const url = document.getElementById("url").value.trim();

  const category = document.getElementById("category").value;

  const resource = createResource(title, url, category);

  resources.push(resource);

  saveResources(resources);

  renderResources(resources);

  resourceForm.reset();
}

function deleteResource(id) {
  resources = resources.filter((resource) => resource.id !== id);

  saveResources(resources);

  applyFilters();
}

function applyFilters() {
  const searchTerm = searchInput.value.toLowerCase();

  const selectedCategory = categoryFilter.value;

  let filtered = [...resources];

  if (selectedCategory !== "All") {
    filtered = filtered.filter(
      (resource) => resource.category === selectedCategory,
    );
  }

  if (searchTerm) {
    filtered = filtered.filter((resource) =>
      resource.title.toLowerCase().includes(searchTerm),
    );
  }

  renderResources(filtered);
}

resourceForm.addEventListener("submit", addResource);

searchInput.addEventListener("input", applyFilters);

categoryFilter.addEventListener("change", applyFilters);

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-btn")) {
    deleteResource(Number(event.target.dataset.id));
  }
});

renderResources(resources);
