const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function calculate(a, b, operator) {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return b !== 0 ? a / b : "Error: Division by zero";
    default:
      return "Invalid operator!";
  }
}

rl.question("Enter first number: ", (num1) => {
  rl.question("Enter operator (+, -, *, /): ", (operator) => {
    rl.question("Enter second number: ", (num2) => {
      const a = parseFloat(num1);
      const b = parseFloat(num2);

      if (isNaN(a) || isNaN(b)) {
        console.log("Invalid input!! Please enter valid numbers.");
      } else {
        console.log(`Result: ${calculate(a, b, operator)}`);
      }

      rl.close();
    });
  });
});
