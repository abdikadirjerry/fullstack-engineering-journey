import { getStudents } from "./students.js";

export function exportToCSV() {
  const students = getStudents();
  if (students.length === 0) {
    alert("No student data available to export.");
    return;
  }

  const headers = ["ID", "Name", "Course", "Grade", "Date Added"];

  // Map object data to comma-separated strings
  const rows = students.map((s) =>
    [s.id, s.name, s.course, s.grade, s.dateAdded].join(","),
  );

  // Construct the final CSV string format
  const csvContent = [headers.join(","), ...rows].join("\n");
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);

  // Create a temporary anchor element to trigger the download
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", "student_records.csv");
  link.style.display = "none";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
