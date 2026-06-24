function renderSnippets(snippets) {
  const snippetList = document.getElementById("snippet-list");

  snippetList.innerHTML = "";

  if (snippets.length === 0) {
    snippetList.innerHTML = `
            <div class="snippet-card">
                <h3>No snippets found</h3>
            </div>
        `;

    updateStatistics([]);

    return;
  }

  snippets.forEach((snippet) => {
    const card = document.createElement("div");

    card.className = "snippet-card";

    card.innerHTML = `
            <h3>${snippet.title}</h3>

            <p>
                Language:
                ${snippet.language}
            </p>

            <pre><code>${snippet.code}</code></pre>

            <div class="actions">

                <button
                    class="favorite-btn"
                    data-id="${snippet.id}"
                >
                    ${snippet.favorite ? "★ Favorite" : "☆ Favorite"}
                </button>

                <button
                    class="delete-btn"
                    data-id="${snippet.id}"
                >
                    Delete
                </button>

            </div>
        `;

    snippetList.appendChild(card);
  });

  updateStatistics(snippets);
}
