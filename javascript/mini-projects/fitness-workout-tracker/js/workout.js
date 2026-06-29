/**
 * Domain-specific Model / Class structure representing a single log entity.
 */
class Workout {
    /**
     * @param {string} name 
     * @param {number} weight 
     * @param {number} reps 
     */
    constructor(name, weight, reps) {
        this.id = crypto.randomUUID?.() || Date.now().toString(36); // Fallback for older environments
        this.name = name.trim();
        this.weight = Number(weight);
        this.reps = Number(reps);
        this.date = new Date().toISOString();
        this.oneRepMax = Utils.calculateOneRepMax(this.weight, this.reps);
    }
}