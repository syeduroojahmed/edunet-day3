// Simple Calculator in JavaScript
function calculator() {
    // Prompt user for inputs
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));
    let operation = prompt("Choose an operation (+, -, *, /):");

    let result;

    // Perform calculation based on the operation
    switch (operation) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                alert("Error: Cannot divide by zero.");
                return;
            }
            break;
        default:
            alert("Invalid operation. Please choose +, -, *, or /.");
            return;
    }

    // Display the result
    alert(`The result is: ${result}`);
}

// Call the calculator function
calculator();
