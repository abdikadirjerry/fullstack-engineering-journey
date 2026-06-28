/**
 * Central Orchestration / Main Application entry point controller.
 */
document.addEventListener("DOMContentLoaded", () => {
  // Shared Memory Application State context
  let state = {
    workouts: [],
  };

  function updateView() {
    const summary = Statistics.generateSummary(state.workouts);
    UI.renderMetrics(summary);
    UI.renderHistory(state.workouts);
  }

  function init() {
    // Hydrate application state from persistence API
    state.workouts = StorageService.getWorkouts();
    updateView();
    setupEventListeners();
  }

  function setupEventListeners() {
    // Log Submission interception handler
    UI.elements.form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = UI.elements.nameInput.value;
      const weight = UI.elements.weightInput.value;
      const reps = UI.elements.repsInput.value;

      // Basic validation guard clause
      if (!name || !weight || !reps) return;

      const newWorkout = new Workout(name, weight, reps);

      state.workouts.unshift(newWorkout); // Insert fresh log first
      StorageService.saveWorkouts(state.workouts);

      updateView();
      UI.clearFormFields();
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
