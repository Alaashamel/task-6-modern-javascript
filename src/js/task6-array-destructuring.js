/**
 * Task 6 - Array Destructuring
 * Demonstrates extracting array elements using destructuring
 */

function demonstrateArrayDestructuring() {
    const colors = ["Red", "Green", "Blue", "Black"];

    console.log("=== Task 6: Array Destructuring ===");

    // Extracting first and second colors using Array Destructuring
    const [firstColor, secondColor] = colors;

    console.log("First Color:", firstColor);
    console.log("Second Color:", secondColor);
    console.log("");
}

demonstrateArrayDestructuring();
