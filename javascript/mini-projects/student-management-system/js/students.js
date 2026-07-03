import { Storage } from "./storage.js";

const STORAGE_KEY = "school-students";
let students = Storage.get(STORAGE_KEY, []);

export function addStudent(name, course, grade) {
  const newStudent = {
    id: crypto.randomUUID(),
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

// --- V3.0 UPGRADE: UPDATE CAPABILITIES --- //

export function getStudentById(id) {
  return students.find((student) => student.id === id);
}

export function updateStudent(id, updatedData) {
  const index = students.findIndex((student) => student.id === id);
  if (index !== -1) {
    // Merge existing data with new data
    students[index] = { ...students[index], ...updatedData };
    Storage.set(STORAGE_KEY, students);
    return true;
  }
  return false;
}

export function getStudents() {
  return [...students];
}

export function getStudentCount() {
  return students.length;
}
