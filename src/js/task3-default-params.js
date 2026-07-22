/**
 * Task 3 - Default Parameter
 * Demonstrates default parameter values in functions
 */

function printStudent(name, age = 20) {
    console.log(`Name: ${name}, Age: ${age}`);
}

function demonstrateDefaultParams() {
    console.log("=== Task 3: Default Parameter ===");

    // Calling with only name (age will use default value of 20)
    printStudent("Ahmed");

    // Calling with both name and age
    printStudent("Ali", 25);

    console.log("");
}

demonstrateDefaultParams();
