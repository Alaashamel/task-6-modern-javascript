// Task 12 - Array map()

const prices = [100, 200, 300, 400];

console.log("=== Task 12: Array map() ===");

console.log("Original Prices:", prices);

// Using map() to add 14% tax to every price
const pricesWithTax = prices.map(price => price * 1.14);

console.log("Prices with 14% tax:", pricesWithTax);
console.log("");
