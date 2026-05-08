/**
 * STUDENT MANAGER
 * Demonstrates destructuring inside array methods and classes.
 */
class StudentManager {
  constructor() {
    this.students = [];
  }

  addStudent(student) {
    this.students.push(student);
  }

  listStudents() {
    console.log("--- Enrolled Students ---");
    // Destructuring each student object directly inside the forEach loop
    this.students.forEach(({ name, age, course }) => {
      console.log(`Name: ${name} | Age: ${age} | Major: ${course}`);
    });
  }
}

const app = new StudentManager();

app.addStudent({ name: "Najio", age: 20, course: "Computer Science" });
app.addStudent({ name: "Ali", age: 22, course: "Software Engineering" });

app.listStudents();
