let bugs = getBugs();

const bugForm = document.getElementById("bug-form");

const searchInput = document.getElementById("search");

const statusFilter = document.getElementById("status-filter");

function createBug(title, priority, status) {
  return {
    id: Date.now(),
    title,
    priority,
    status,
  };
}

function addBug(event) {
  event.preventDefault();

  const title = document.getElementById("title").value.trim();

  const priority = document.getElementById("priority").value;

  const status = document.getElementById("status").value;

  const bug = createBug(title, priority, status);

  bugs.push(bug);

  saveBugs(bugs);

  renderBugs(bugs);

  bugForm.reset();
}

function deleteBug(id) {
  bugs = bugs.filter((bug) => bug.id !== id);

  saveBugs(bugs);

  applyFilters();
}

function applyFilters() {
  const searchTerm = searchInput.value.toLowerCase();

  const selectedStatus = statusFilter.value;

  let filtered = [...bugs];

  if (selectedStatus !== "All") {
    filtered = filtered.filter((bug) => bug.status === selectedStatus);
  }

  if (searchTerm) {
    filtered = filtered.filter((bug) =>
      bug.title.toLowerCase().includes(searchTerm),
    );
  }

  renderBugs(filtered);
}

bugForm.addEventListener("submit", addBug);

searchInput.addEventListener("input", applyFilters);

statusFilter.addEventListener("change", applyFilters);

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-btn")) {
    deleteBug(Number(event.target.dataset.id));
  }
});

renderBugs(bugs);
