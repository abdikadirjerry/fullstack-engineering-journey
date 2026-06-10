const students = [
  {
    name: "Ahmed",
    score: 90,
  },

  {
    name: "Ali",
    score: 75,
  },

  {
    name: "Jerry",
    score: 88,
  },
];

function generateReport() {
  console.log("===== STUDENT REPORT =====");

  let totalScore = 0;

  for (const student of students) {
    console.log(`${student.name}: ${student.score}`);

    totalScore += student.score;
  }

  const average = totalScore / students.length;

  console.log("Average Score:", average);
}

generateReport();
