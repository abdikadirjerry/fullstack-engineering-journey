let snippets = getSnippets();

const snippetForm = document.getElementById("snippet-form");

const searchInput = document.getElementById("search");

const languageFilter = document.getElementById("language-filter");

function createSnippet(title, language, code) {
  return {
    id: Date.now(),
    title,
    language,
    code,
    favorite: false,
  };
}

function addSnippet(event) {
  event.preventDefault();

  const title = document.getElementById("title").value.trim();

  const language = document.getElementById("language").value;

  const code = document.getElementById("code").value.trim();

  const snippet = createSnippet(title, language, code);

  snippets.push(snippet);

  saveSnippets(snippets);

  renderSnippets(snippets);

  snippetForm.reset();
}

function deleteSnippet(id) {
  snippets = snippets.filter((snippet) => snippet.id !== id);

  saveSnippets(snippets);

  applyFilters();
}

function toggleFavorite(id) {
  snippets = snippets.map((snippet) => {
    if (snippet.id === id) {
      return {
        ...snippet,
        favorite: !snippet.favorite,
      };
    }

    return snippet;
  });

  saveSnippets(snippets);

  applyFilters();
}

function applyFilters() {
  const searchTerm = searchInput.value.toLowerCase();

  const language = languageFilter.value;

  let filtered = [...snippets];

  if (language !== "All") {
    filtered = filtered.filter((snippet) => snippet.language === language);
  }

  if (searchTerm) {
    filtered = filtered.filter((snippet) =>
      snippet.title.toLowerCase().includes(searchTerm),
    );
  }

  renderSnippets(filtered);
}

snippetForm.addEventListener("submit", addSnippet);

searchInput.addEventListener("input", applyFilters);

languageFilter.addEventListener("change", applyFilters);

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-btn")) {
    deleteSnippet(Number(event.target.dataset.id));
  }

  if (event.target.classList.contains("favorite-btn")) {
    toggleFavorite(Number(event.target.dataset.id));
  }
});

renderSnippets(snippets);
