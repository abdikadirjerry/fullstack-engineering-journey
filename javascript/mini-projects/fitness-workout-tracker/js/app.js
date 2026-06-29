/**
 * Central Orchestration / Main Application entry point controller.
 */
document.addEventListener("DOMContentLoaded", () => {
  // Shared Memory Application State context
  let state = {
    workouts: [],
    searchQuery: "",
  };

  function updateView() {
    const summary = Statistics.generateSummary(state.workouts);
    UI.renderMetrics(summary);
    UI.renderHistory(state.workouts, state.searchQuery);
  }

  function init() {
    // Hydrate application state from persistence API
    state.workouts = StorageService.getWorkouts();
    updateView();
    setupEventListeners();
  }

  function validateForm(name, weight, reps) {
    const errors = {};
    if (!name.trim()) errors.name = "Exercise name is required.";
    if (!weight || Number(weight) <= 0)
      errors.weight = "Weight must be greater than 0.";
    if (!reps || Number(reps) <= 0)
      errors.reps = "Reps must be greater than 0.";
    return errors;
  }

  function setupEventListeners() {
    // Log Submission interception handler
    UI.elements.form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = UI.elements.nameInput.value;
      const weight = UI.elements.weightInput.value;
      const reps = UI.elements.repsInput.value;

      const validationErrors = validateForm(name, weight, reps);
      if (Object.keys(validationErrors).length > 0) {
        UI.showErrors(validationErrors);
        return;
      }

      const newWorkout = new Workout(name, weight, reps);

      state.workouts.unshift(newWorkout); // Insert fresh log first
      StorageService.saveWorkouts(state.workouts);

      updateView();
      UI.clearFormFields();
    });

    // Search filtering handler
    UI.elements.searchInput.addEventListener("input", (e) => {
      state.searchQuery = e.target.value;
      UI.renderHistory(state.workouts, state.searchQuery);
    });

    // Event delegation pattern handling dynamic item deletions
    UI.elements.workoutList.addEventListener("click", (e) => {
      if (e.target.classList.contains("delete-btn")) {
        const targetId = e.target.getAttribute("data-id");

        state.workouts = state.workouts.filter((w) => w.id !== targetId);
        StorageService.saveWorkouts(state.workouts);

        updateView();
      }
    });
  }

  init();
});
