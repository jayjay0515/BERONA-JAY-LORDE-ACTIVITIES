
async function login() {
  const data = {
    username: document.getElementById("username").value,
    password: document.getElementById("password").value
  };

    const response = await fetch('http://localhost/fetch/api/login.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  const result = await response.json();
  console.log(result); // debug

  if (result.success) {
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("tableSection").style.display = "block";
    loadStudents();
  } else {
    document.getElementById("error").innerText = "Invalid login";
  }
}

async function loadStudents() {
  try {
    const response = await fetch('http://localhost/fetch/api/data/students.json');
    if (!response.ok) throw new Error("HTTP error " + response.status);

    const students = await response.json();
    console.log(students); // debug

    const tableBody = document.querySelector("#studentTable tbody");
    tableBody.innerHTML = "";

    students.forEach(student => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${student.id}</td>
        <td>${student.student_id}</td>
        <td>${student.first_name} ${student.last_name}</td>
        <td>${student.email}</td>
        <td>${student.course}</td>
        <td>${student.year_level}</td>
        <td>${student.enrollment_date}</td>
      `;
      tableBody.appendChild(row);
    });
  } catch (err) {
    console.error("Error loading students:", err);
  }
}