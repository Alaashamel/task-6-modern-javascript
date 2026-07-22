/**
 * Task 1 - Strict Mode
 * Demonstrates the use of strict mode in JavaScript
 */

"use strict";

// Enable Strict Mode at the top of the file

// Without strict mode, this would work:
// secretKey = "abc123";  // This would create a global variable

// With strict mode, this will throw an error:
// secretKey = "abc123";  // ReferenceError: secretKey is not defined

// Fix: Use let, const, or var to declare variables
let secretKey = "abc123";

function demonstrateStrictMode() {
    console.log("=== Task 1: Strict Mode ===");
    console.log("Strict Mode is enabled");
    console.log("Variable declared with let:", secretKey);
    console.log("");
}

demonstrateStrictMode();
