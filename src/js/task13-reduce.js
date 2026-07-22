// Task 13 - Array reduce()

const marks = [80, 90, 70, 100];

console.log("=== Task 13: Array reduce() ===");

console.log("Marks:", marks);

// Using reduce() to calculate the total marks
const totalMarks = marks.reduce((accumulator, current) => accumulator + current, 0);

console.log("Total Marks:", totalMarks);
console.log("");
