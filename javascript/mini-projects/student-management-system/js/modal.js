export function openEditModal(studentData) {
  const modal = document.getElementById("edit-modal");

  // Populate the form fields with existing data
  document.getElementById("edit-id").value = studentData.id;
  document.getElementById("edit-name").value = studentData.name;
  document.getElementById("edit-course").value = studentData.course;
  document.getElementById("edit-grade").value = studentData.grade;

  // Show modal
  modal.classList.remove("hidden");
  // Small delay to allow CSS transition to trigger
  setTimeout(() => modal.classList.add("fade-in"), 10);
}

export function closeEditModal() {
  const modal = document.getElementById("edit-modal");
  modal.classList.remove("fade-in");

  // Wait for transition before hiding from DOM
  setTimeout(() => {
    modal.classList.add("hidden");
    document.getElementById("edit-form").reset();
  }, 200);
}

export function initModalListeners() {
  const modal = document.getElementById("edit-modal");
  const closeBtn = document.getElementById("close-modal-btn");

  closeBtn.addEventListener("click", closeEditModal);

  // Close modal if user clicks outside the content box
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeEditModal();
  });
}
