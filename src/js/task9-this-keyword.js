/**
 * Task 9 - this Keyword
 * Demonstrates the use of 'this' in object methods
 */

function demonstrateThisKeyword() {
    const employee = {
        name: "Sara",
        salary: 5000,
        printInfo: function() {
            console.log(`Name: ${this.name}`);
            console.log(`Salary: ${this.salary}`);
        }
    };

    console.log("=== Task 9: this Keyword ===");

    // Calling the method that uses 'this'
    employee.printInfo();
    console.log("");
}

demonstrateThisKeyword();
