const students = [];
function addStudent() {
    const name = document.getElementById("NameInput").value;
    const age = parseInt(document.getElementById("AgeInput").value);
    const course = document.getElementById("CourseInput").value;

    if (!name || !age || !course) {
        alert("Please enter all fields!");
        return;
    }
    const student = {
        name: name,
        age: age,
        course: course
    };
    students.push(student);
    document.getElementById("NameInput").value = '';
    document.getElementById("AgeInput").value = '';
    document.getElementById("CourseInput").value = '';
    displayStudents();
}

function displayStudents() {
    const studentList = document.getElementById("studentList");
    studentList.innerHTML = "";  
    students.forEach((student, index) => {
        const div = document.createElement("div");
        div.className = "student";
        div.innerHTML = `<strong>${index + 1}. ${student.name}</strong> (Age: ${student.age}, Course: ${student.course})`;
        studentList.appendChild(div);
    });
}

