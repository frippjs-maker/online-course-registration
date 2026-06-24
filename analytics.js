// Import the readline-sync module to read user input easily in a loop
const readline = require('readline-sync');

// Array to store the integers entered by the user
let numbers = [];
let keepGoing = true;

console.log("Welcome to the Product Matching Analytics Program!");
console.log("Enter integers one by one. Enter 'q' or 'Q' when you are finished.");
console.log("-----------------------------------------------------------------");

// Loop to continuously ask the user for input until they quit
while (keepGoing) {
    let input = readline.question("Enter an integer (or 'q' to quit): ");
    let trimmedInput = input.trim();

    // Check if the user wants to quit (handles both 'q' and 'Q')
    if (trimmedInput.toLowerCase() === 'q') {
        keepGoing = false;
    } 
    // Error Handling: Check if empty or not a valid number
    else if (trimmedInput === "" || isNaN(trimmedInput)) {
        console.log("❌ Error: Invalid input. Please enter a whole integer or 'q'.");
    } 
    // Error Handling: Prevent decimal inputs
    else if (parseFloat(trimmedInput) !== parseInt(trimmedInput)) {
        console.log("❌ Error: Decimals are not allowed. Please enter a whole integer.");
    } 
    // If it passes all validation, push the parsed integer into the array
    else {
        let validInteger = parseInt(trimmedInput);
        numbers.push(validInteger);
    }
}

// 2. Echo the integers entered back to the user
console.log("\n-----------------------------------------------------------------");
console.log("Integers entered: " + numbers.join(", "));
console.log("-----------------------------------------------------------------");

// Flag to track if the mathematical condition is ever met
let conditionMet = false;

// 3. Determine if the product of any two entered integers equals a third integer
// We use nested loops to test every combination of elements in the list
for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
        // Ensure we are not multiplying a number by itself at the exact same position
        if (i !== j) {
            let product = numbers[i] * numbers[j];

            // Look through the array to see if this product matches a third distinct index element
            for (let k = 0; k < numbers.length; k++) {
                // Ensure the third number is distinct from the two factors being multiplied
                if (k !== i && k !== j) {
                    if (product === numbers[k]) {
                        console.log(`🎉 Condition is met: ${numbers[i]} x ${numbers[j]} = ${numbers[k]}`);
                        conditionMet = true;
                        break; // Exit loop since we found a match
                    }
                }
            }
        }
        if (conditionMet) break;
    }
    if (conditionMet) break;
}

// If we checked all combinations and found nothing, display the fallback message
if (!conditionMet) {
    console.log("❌ Condition was not met");
}