/**
 * UI / DOM Management Layer (View Layer Interaction)
 */
const UI = {
    elements: {
        form: document.getElementById('workout-form'),
        nameInput: document.getElementById('exercise-name'),
        weightInput: document.getElementById('workout-weight'),
        repsInput: document.getElementById('workout-reps'),
        searchInput: document.getElementById('search-logs'),
        workoutList: document.getElementById('workout-list'),
        totalWorkouts: document.getElementById('total-workouts'),
        totalVolume: document.getElementById('total-volume'),
        topExercise: document.getElementById('top-exercise'),
        nameError: document.getElementById('name-error'),
        weightError: document.getElementById('weight-error'),
        repsError: document.getElementById('reps-error')
    },

    /**
     * Completely renders list items into history log with an optional search filter string.
     * @param {Array} workouts 
     * @param {string} filterText
     */
    renderHistory(workouts, filterText = '') {
        this.elements.workoutList.innerHTML = '';

        const filtered = workouts.filter(w => 
            w.name.toLowerCase().includes(filterText.toLowerCase())
        );

        if (filtered.length === 0) {
            this.elements.workoutList.innerHTML = `
                <tr>
                    <td colspan="6" style="text-align: center; color: var(--text-muted);">No matching records found.</td>
                </tr>`;
            return;
        }

        filtered.forEach(workout => {
            const row = document.createElement('tr');
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
     * Set explicit visibility errors inside the form inputs.
     */
    showErrors(errors) {
        // Reset old errors
        this.elements.nameInput.classList.remove('invalid');
        this.elements.weightInput.classList.remove('invalid');
        this.elements.repsInput.classList.remove('invalid');
        this.elements.nameError.textContent = '';
        this.elements.weightError.textContent = '';
        this.elements.repsError.textContent = '';

        if (errors.name) {
            this.elements.nameInput.classList.add('invalid');
            this.elements.nameError.textContent = errors.name;
        }
        if (errors.weight) {
            this.elements.weightInput.classList.add('invalid');
            this.elements.weightError.textContent = errors.weight;
        }
        if (errors.reps) {
            this.elements.repsInput.classList.add('invalid');
            this.elements.repsError.textContent = errors.reps;
        }
    },

    /**
     * Updates top-level calculated aggregates.
     * @param {Object} metrics 
     */
    renderMetrics(metrics) {
        this.elements.totalWorkouts.textContent = metrics.totalWorkouts;
        this.elements.totalVolume.textContent = metrics.totalVolume.toLocaleString();
        this.elements.topExercise.textContent = metrics.topExercise;
    },

    /**
     * Resets input fields safely.
     */
    clearFormFields() {
        this.elements.form.reset();
        this.showErrors({}); // Clear validation hints
    }
};