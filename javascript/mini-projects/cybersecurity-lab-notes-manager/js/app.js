let notes = getNotes();

const noteForm = document.getElementById("note-form");
const searchInput = document.getElementById("search");
const categoryFilter = document.getElementById("category-filter");

function createNote(title, category, commands, notesText) {
  return {
    id: Date.now(),
    title,
    category,
    commands,
    notes: notesText,
  };
}

function addNote(event) {
  event.preventDefault();

  const title = document.getElementById("title").value.trim();

  const category = document.getElementById("category").value;

  const commands = document.getElementById("commands").value.trim();

  const notesText = document.getElementById("notes").value.trim();

  if (!title || !commands || !notesText) {
    return;
  }

  const note = createNote(title, category, commands, notesText);

  notes.push(note);

  saveNotes(notes);

  renderNotes(notes);

  noteForm.reset();
}

function deleteNote(id) {
  notes = notes.filter((note) => note.id !== id);

  saveNotes(notes);

  applyFilters();
}

function applyFilters() {
  const searchValue = searchInput.value.toLowerCase().trim();

  const categoryValue = categoryFilter.value;

  let filteredNotes = [...notes];

  if (categoryValue !== "All") {
    filteredNotes = filteredNotes.filter(
      (note) => note.category === categoryValue,
    );
  }

  if (searchValue !== "") {
    filteredNotes = filteredNotes.filter((note) => {
      return (
        note.title.toLowerCase().includes(searchValue) ||
        note.commands.toLowerCase().includes(searchValue) ||
        note.notes.toLowerCase().includes(searchValue)
      );
    });
  }

  renderNotes(filteredNotes);
}

noteForm.addEventListener("submit", addNote);

searchInput.addEventListener("input", applyFilters);

categoryFilter.addEventListener("change", applyFilters);

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-btn")) {
    const id = Number(event.target.dataset.id);

    deleteNote(id);
  }
});

renderNotes(notes);
