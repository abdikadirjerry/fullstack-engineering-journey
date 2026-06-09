const scores = [90, 75, 88, 95, 67];

let highestScore = scores[0];

for (let index = 1; index < scores.length; index++) {
  if (scores[index] > highestScore) {
    highestScore = scores[index];
  }
}

console.log(highestScore);
