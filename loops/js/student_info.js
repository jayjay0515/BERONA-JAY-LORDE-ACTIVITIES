// ---------------- STUDENTS DATA ----------------
const students = [
  { name: "Ana", scores: [85, 90, 88], present: true },  
  { name: "Ben", scores: [70, 75, 72], present: false },
  { name: "Cara", scores: [95, 92, 94], present: true },
  { name: "Daniel", scores: [60, 65, 70], present: true },
  { name: "Ella", scores: [88, 85, 90], present: true },
  { name: "Felix", scores: [78, 80, 82], present: false },
  { name: "Grace", scores: [92, 89, 94], present: true },
  { name: "Hannah", scores: [73, 70, 68], present: false },
  { name: "Ivan", scores: [81, 84, 79], present: true },
  { name: "Julia", scores: [96, 98, 97], present: true }
];

// ---------------- TABLE BODY SELECTOR ----------------
const tbody = document.querySelector("#student-table tbody"); 

// ---------------- HELPER FUNCTIONS ----------------

// Return student name 
function getName(student) {
  return student.name;
}

// Compute average of scores
function getAverage(scores) {
  let sum = 0;
  let i = 0;

  while (i < scores.length) { // loop sa bawat score
    sum += scores[i];
    i++;
  }

  return (sum / scores.length).toFixed(2); // average na may 2 decimal places
}

// Return "Passed" o "Failed" base sa average
function getRemarks(avg) {
  return avg >= 75 ? "Passed" : "Failed";
}

// ---------------- DISPLAY STUDENTS ----------------
function displayStudents(list) {
  tbody.innerHTML = ""; // clear existing rows

  let i = 0;
  while (i < list.length) {
    let student = list[i];
    let avg = getAverage(student.scores);

    let row = document.createElement("tr"); 
    row.innerHTML = `
      <td>${getName(student)}</td>
      <td>${student.scores[0]}</td>
      <td>${student.scores[1]}</td>
      <td>${student.scores[2]}</td>
      <td>${avg}</td>
      <td>${getRemarks(avg)}</td>
    `;

    tbody.appendChild(row);
    i++;
  }
}

// ---------------- SEARCH FUNCTION ----------------
function submitStudentInfo() {
  let search = document.getElementById("search").value.toLowerCase();
  let result = [];
  let i = 0;

  while (i < students.length) {
    let name = getName(students[i]).toLowerCase();

    if (name.includes(search)) {
      result.push(students[i]);
    }
    i++;
  }

  displayStudents(result);
}
 
// ---------------- FILTER FUNCTIONS ----------------
function presents() {
  let result = [];
  let i = 0;

  while (i < students.length) {
    if (students[i].present === true) result.push(students[i]);
    i++;
  }

  displayStudents(result);
}

function absents() {
  let result = [];
  let i = 0;

  while (i < students.length) {
    if (students[i].present === false) result.push(students[i]);
    i++;
  }

  displayStudents(result);
}

function passed() {
  let result = [];
  let i = 0;

  while (i < students.length) {
    let avg = getAverage(students[i].scores);
    if (avg >= 75) result.push(students[i]);
    i++;
  }

  displayStudents(result);
}

function failed() {
  let result = [];
  let i = 0;

  while (i < students.length) {
    let avg = getAverage(students[i].scores);
    if (avg < 75) result.push(students[i]);
    i++;
  }

  displayStudents(result);
}

// ---------------- INITIAL LOAD ----------------
displayStudents(students); // ipakita lahat pag load ng page
