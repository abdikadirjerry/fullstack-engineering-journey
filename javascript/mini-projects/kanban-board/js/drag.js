import { updateTaskStatus } from "./state.js";
import { renderBoard } from "./app.js"; // We will export this from app.js

export function initDragAndDrop() {
  const taskCards = document.querySelectorAll(".task-card");
  const columns = document.querySelectorAll(".task-list");

  // 1. Handling the dragged item
  taskCards.forEach((card) => {
    card.addEventListener("dragstart", (e) => {
      card.classList.add("dragging");
      // Store the ID of the dragged element
      e.dataTransfer.setData("text/plain", card.id);
    });

    card.addEventListener("dragend", () => {
      card.classList.remove("dragging");
    });
  });

  // 2. Handling the drop zones (Columns)
  columns.forEach((column) => {
    // Allow dropping by preventing default behavior
    column.addEventListener("dragover", (e) => {
      e.preventDefault();
      column.classList.add("drag-over");
    });

    column.addEventListener("dragleave", () => {
      column.classList.remove("drag-over");
    });

    column.addEventListener("drop", (e) => {
      e.preventDefault();
      column.classList.remove("drag-over");

      // Retrieve the ID we set during dragstart
      const draggedId = e.dataTransfer.getData("text/plain");

      // Get the new status from the column's dataset (e.g., data-status="doing")
      const newStatus = column.getAttribute("data-status");

      // Update the logical state
      updateTaskStatus(draggedId, newStatus);

      // Re-render the UI to match the new state
      renderBoard();
    });
  });
}
