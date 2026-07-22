/**
 * Task 7 - Spread Operator (Array)
 * Demonstrates spreading arrays to merge them
 */

function demonstrateSpreadArray() {
    const frontEnd = ["HTML", "CSS", "JavaScript"];
    const frameworks = ["Angular", "React"];

    console.log("=== Task 7: Spread Operator (Array) ===");

    // Merging both arrays using Spread Operator
    const allTech = [...frontEnd, ...frameworks];

    console.log("Front End:", frontEnd);
    console.log("Frameworks:", frameworks);
    console.log("Merged Array:", allTech);
    console.log("");
}

demonstrateSpreadArray();
