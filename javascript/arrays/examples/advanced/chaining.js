const scores = [70, 80, 90, 100];

const total = scores.reduce((sum, score) => sum + score, 0);

const average = total / scores.length;

console.log("Average Score:", average);
