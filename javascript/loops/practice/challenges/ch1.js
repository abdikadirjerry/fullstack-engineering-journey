const scores = [90, 75, 88, 95, 67];

let highestScore = scores[0];

for (let i = 1; i < scores.length; i++) {
  if (scores[i] > highestScore) {
    highestScore = scores[i];
  }
}

console.log(highestScore);
