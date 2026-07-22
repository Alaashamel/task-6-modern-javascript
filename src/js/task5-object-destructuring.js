// Task 5 - Object Destructuring

const student = {
    name: "Ali",
    age: 21,
    degree: 95
};

console.log("=== Task 5: Object Destructuring ===");

// Extracting values using Object Destructuring
const { name: studentName, age: studentAge, degree: studentDegree } = student;

console.log("Name:", studentName);
console.log("Age:", studentAge);
console.log("Degree:", studentDegree);
console.log("");
