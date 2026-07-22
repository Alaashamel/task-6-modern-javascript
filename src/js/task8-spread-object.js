/**
 * Task 8 - Spread Operator (Object)
 * Demonstrates spreading objects to merge properties
 */

function demonstrateSpreadObject() {
    const student = {
        name: "Ahmed",
        age: 22
    };

    console.log("=== Task 8: Spread Operator (Object) ===");

    // Creating new object with existing properties and new ones
    const newStudent = {
        ...student,
        department: "Engineering",
        degree: 85
    };

    console.log("Original Object:", student);
    console.log("New Object:", newStudent);
    console.log("");
}

demonstrateSpreadObject();
