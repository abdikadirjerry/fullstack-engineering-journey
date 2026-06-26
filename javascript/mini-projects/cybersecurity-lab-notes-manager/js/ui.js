function renderNotes(notes) {
  const notesList = document.getElementById("notes-list");

  notesList.innerHTML = "";

  if (notes.length === 0) {
    notesList.innerHTML = `
            <div class="note">
                <h3>No lab notes found.</h3>
                <p>
                    Save your first cybersecurity
                    lab note.
                </p>
            </div>
        `;

    updateStatistics([]);

    return;
  }

  notes.forEach((note) => {
    const article = document.createElement("article");

    article.className = "note";

    article.innerHTML = `

            <h3>
                ${note.title}
            </h3>

            <p>

                <strong>
                    Category:
                </strong>

                ${note.category}

            </p>

            <h4>
                Commands
            </h4>

            <pre>${note.commands}</pre>

            <h4>
                Notes
            </h4>

            <pre>${note.notes}</pre>

            <div class="actions">

                <button
                    class="delete-btn"
                    data-id="${note.id}"
                >
                    Delete
                </button>

            </div>

        `;

    notesList.appendChild(article);
  });

  updateStatistics(notes);
}
