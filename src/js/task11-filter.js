/**
 * Task 11 - Array filter()
 * Demonstrates filtering array elements with a condition
 */

function demonstrateFilter() {
    const numbers = [10, 15, 20, 25, 30, 35];

    console.log("=== Task 11: Array filter() ===");

    console.log("Original Array:", numbers);

    // Using filter() to return all numbers greater than 20
    const greaterThan20 = numbers.filter(num => num > 20);

    console.log("Numbers greater than 20:", greaterThan20);
    console.log("");
}

demonstrateFilter();
