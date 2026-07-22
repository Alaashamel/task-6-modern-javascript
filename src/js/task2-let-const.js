/**
 * Task 2 - let & const
 * Demonstrates variable declarations in ES6+
 */

function demonstrateLetAndConst() {
    // Using let for variables that can be reassigned
    let name = "Ahmed";

    // Using const for constants that cannot be reassigned
    const PI = 3.14159;

    console.log("=== Task 2: let & const ===");
    console.log("Initial name:", name);
    console.log("PI:", PI);

    // Changing the value of name (allowed with let)
    name = "Ali";
    console.log("Updated name:", name);

    // Trying to reassign const will cause an error:
    // PI = 3.14;  // TypeError: Assignment to constant variable.

    console.log("");
}

demonstrateLetAndConst();
