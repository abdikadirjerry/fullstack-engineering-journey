export function showToast(message, type = "success") {
  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.textContent = message;

  document.body.appendChild(toast);

  // Slight delay to allow DOM insertion before adding the animation class
  setTimeout(() => toast.classList.add("show"), 10);

  // Remove the toast cleanly after 3 seconds
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300); // Wait for transition to finish
  }, 3000);
}
