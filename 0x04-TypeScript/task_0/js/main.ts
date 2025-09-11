// main.ts

// 1.Create the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// 2.Create two students
const student1: Student = {
  firstName: "Alice",
  lastName: "Johnson",
  age: 22,
  location: "New York",
};

const student2: Student = {
  firstName: "Bob",
  lastName: "Smith",
  age: 24,
  location: "Los Angeles",
};

// 3.Add them to an array
const studentsList: Student[] = [student1, student2];

// 4. Render a table in the DOM
function renderTable(students: Student[]) {
  // Create table element
  const table: HTMLTableElement = document.createElement("table");
  table.border = "1"; // optional: add a border to the table

  // Create header row
  const headerRow = table.insertRow();
  const header1 = headerRow.insertCell();
  header1.innerText = "First Name";
  const header2 = headerRow.insertCell();
  header2.innerText = "Location";

  // Add rows for each student
  students.forEach((student) => {
    const row = table.insertRow();
    const firstNameCell = row.insertCell();
    firstNameCell.innerText = student.firstName;

    const locationCell = row.insertCell();
    locationCell.innerText = student.location;
  });

  // Append table to the body
  document.body.appendChild(table);
}

// Call the function
renderTable(studentsList);
