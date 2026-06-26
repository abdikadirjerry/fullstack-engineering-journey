const STORAGE_KEY = "cybersecurity_lab_notes";

function getNotes() {
  const notes = localStorage.getItem(STORAGE_KEY);

  return notes ? JSON.parse(notes) : [];
}

function saveNotes(notes) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
}
