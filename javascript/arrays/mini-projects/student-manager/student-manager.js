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

function addStudent(name) {
  students.push({
    id: Date.now(),
    name,
  });
}

function removeStudent(id) {
  const index = students.findIndex((student) => student.id === id);

  if (index !== -1) {
    students.splice(index, 1);
  }
}

function getStudent(id) {
  return students.find((student) => student.id === id);
}

function getStudentCount() {
  return students.length;
}

addStudent("Hassan");

console.log(students);

console.log("Total Students:", getStudentCount());
