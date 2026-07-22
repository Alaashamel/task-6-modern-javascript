// Task 3 - Default Parameter

function printStudent(name, age = 20) {
    console.log(`Name: ${name}, Age: ${age}`);
}

console.log("=== Task 3: Default Parameter ===");

// Calling with only name (age will use default value of 20)
printStudent("Ahmed");

// Calling with both name and age
printStudent("Ali", 25);

console.log("");
