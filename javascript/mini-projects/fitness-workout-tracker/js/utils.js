/**
 * Utility functions for domain-agnostic calculations and formatting.
 */
const Utils = {
    /**
     * Formats an ISO string or timestamp into a readable date format.
     * @param {string|number} dateInput 
     * @returns {string} MMMM DD, YYYY
     */
    formatDate(dateInput) {
        const options = { month: 'short', day: 'numeric', year: 'numeric' };
        return new Date(dateInput).toLocaleDateString(undefined, options);
    },

    /**
     * Estimates 1-Rep Max using the Epley formula.
     * Formula: 1RM = w * (1 + r / 30)
     * @param {number} weight 
     * @param {number} reps 
     * @returns {number}
     */
    calculateOneRepMax(weight, reps) {
        if (reps === 1) return weight;
        return Math.round(weight * (1 + reps / 30));
    }
};