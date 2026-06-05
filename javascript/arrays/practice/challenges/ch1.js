const students = [
  {
    id: 1,
    name: "Ahmed",
  },

  {
    id: 2,
    name: "Ali",
  },

  {
    id: 3,
    name: "Jerry",
  },
];

const student = students.find((student) => student.id === 3);

console.log(student);
