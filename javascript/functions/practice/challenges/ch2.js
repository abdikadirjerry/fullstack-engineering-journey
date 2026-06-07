function calculateAverage(scores) {
  const total = scores.reduce((sum, score) => sum + score, 0);

  return total / scores.length;
}

console.log(calculateAverage([80, 90, 100]));
