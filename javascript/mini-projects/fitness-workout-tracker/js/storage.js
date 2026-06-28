/**
 * Abstracted interface layer for data persistence using Web Storage API.
 */
const StorageService = {
  STORAGE_KEY: "fittrack_workouts",

  /**
   * Retrieves all recorded logs from localStorage.
   * @returns {Array} Array of workout records
   */
  getWorkouts() {
    try {
      const data = localStorage.getItem(this.STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error("Failed to parse workout history from storage:", error);
      return [];
    }
  },

  /**
   * Overwrites or saves the array context back to localStorage.
   * @param {Array} workouts
   */
  saveWorkouts(workouts) {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(workouts));
    } catch (error) {
      console.error("Failed to save state to localStorage:", error);
    }
  },
};
