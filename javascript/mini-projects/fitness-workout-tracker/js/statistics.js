/**
 * Computation module dedicated to computing core dashboard metrics.
 */
const Statistics = {
  /**
   * Generates standard analytical summary points from list context.
   * @param {Array} workouts
   * @returns {Object}
   */
  generateSummary(workouts) {
    if (!workouts || workouts.length === 0) {
      return { totalWorkouts: 0, totalVolume: 0, topExercise: "-" };
    }

    const totalWorkouts = workouts.length;

    const totalVolume = workouts.reduce((acc, curr) => {
      return acc + curr.weight * curr.reps;
    }, 0);

    // Track key frequency map for most logged name
    const frequencyMap = {};
    let topExercise = "-";
    let maxCount = 0;

    workouts.forEach((w) => {
      const normalized = w.name.toLowerCase();
      frequencyMap[normalized] = (frequencyMap[normalized] || 0) + 1;

      if (frequencyMap[normalized] > maxCount) {
        maxCount = frequencyMap[normalized];
        // Keep original casing variation by storing reference
        topExercise = w.name;
      }
    });

    return {
      totalWorkouts,
      totalVolume,
      topExercise,
    };
  },
};
