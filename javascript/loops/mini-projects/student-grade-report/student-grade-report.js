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
  for (let index = 0; index < students.length; index++) {
    const student = students[index];

    console.log(`${student.name}: ${student.score}`);
  }
}

generateReport();
