import { Storage } from "./storage.js";

const STORAGE_KEY = "school-students";
let students = Storage.get(STORAGE_KEY, []);

export function addStudent(name, course, grade) {
  const newStudent = {
    id: crypto.randomUUID(), // Generates a unique ID
    name,
    course,
    grade,
    dateAdded: new Date().toISOString(),
  };

  students.push(newStudent);
  Storage.set(STORAGE_KEY, students);
  return newStudent;
}

export function deleteStudent(id) {
  students = students.filter((student) => student.id !== id);
  Storage.set(STORAGE_KEY, students);
}

export function getStudents() {
  return [...students]; // Return a copy to prevent accidental mutations
}

export function getStudentCount() {
  return students.length;
}
