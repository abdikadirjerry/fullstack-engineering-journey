/**
 * UI / DOM Management Layer (View Layer Interaction)
 */
const UI = {
  elements: {
    form: document.getElementById("workout-form"),
    nameInput: document.getElementById("exercise-name"),
    weightInput: document.getElementById("workout-weight"),
    repsInput: document.getElementById("workout-reps"),
    workoutList: document.getElementById("workout-list"),
    totalWorkouts: document.getElementById("total-workouts"),
    totalVolume: document.getElementById("total-volume"),
    topExercise: document.getElementById("top-exercise"),
  },

  /**
   * Completely renders list items into history log.
   * @param {Array} workouts
   */
  renderHistory(workouts) {
    this.elements.workoutList.innerHTML = "";

    if (workouts.length === 0) {
      this.elements.workoutList.innerHTML = `
                <tr>
                    <td colspan="6" style="text-align: center; color: var(--text-muted);">No records logged yet.</td>
                </tr>`;
      return;
    }

    workouts.forEach((workout) => {
      const row = document.createElement("tr");
      row.innerHTML = `
                <td>${Utils.formatDate(workout.date)}</td>
                <td><strong>${workout.name}</strong></td>
                <td>${workout.weight} kg</td>
                <td>${workout.reps}</td>
                <td>${workout.oneRepMax} kg</td>
                <td>
                    <button class="btn btn-danger delete-btn" data-id="${workout.id}">Delete</button>
                </td>
            `;
      this.elements.workoutList.appendChild(row);
    });
  },

  /**
   * Updates top-level calculated aggregates.
   * @param {Object} metrics
   */
  renderMetrics(metrics) {
    this.elements.totalWorkouts.textContent = metrics.totalWorkouts;
    this.elements.totalVolume.textContent =
      metrics.totalVolume.toLocaleString();
    this.elements.topExercise.textContent = metrics.topExercise;
  },

  /**
   * Resets input fields safely.
   */
  clearFormFields() {
    this.elements.form.reset();
  },
};
