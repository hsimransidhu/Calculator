# Calculator
This is a simple and versatile calculator implemented in JavaScript. It provides basic arithmetic operations, including addition, subtraction, multiplication, and division, along with the ability to clear the input and display.

## Features

- Perform standard arithmetic operations.
- Clear the input and display with a dedicated "AC" button.
- Delete the last character with a "DEL" button.
- Evaluate expressions by pressing "=" or "Enter" on your keyboard.
- Responsive design for desktop and mobile devices.
- Intuitive user interface with button and keyboard input support.

## Usage

1. The calculator's user interface will be displayed with a text input field and various buttons.
2. You can input numbers and perform calculations using both the mouse and keyboard.

### Basic Arithmetic Operations

 The calculator supports common arithmetic operations, including addition, subtraction, multiplication, and division. Here's how you can perform each operation using the calculator:

- **How to Use:** Type a number, click the "+" button, type another number, and click "=" to see the result. In the same way , other arithmetic operations can be used.

## Code Explanation

The calculator's functionality is powered by JavaScript, and it utilizes the `eval` function for expression evaluation. Here's an explanation of how the `eval` function works and its use in the code:

```javascript
if (e.target.innerHTML == '=') {
    // Evaluate the expression in 'string' using JavaScript's eval function
    string = eval(string);
    box.value = string;
}

### 'eval' Function

The `eval` function in JavaScript is a powerful feature that allows you to evaluate a JavaScript expression represented as a string. In your calculator code, it is used to process the user's input and compute the result of arithmetic operations.

**How It Works:** When the "=" button is clicked, the code retrieves the content of the `string` variable (which stores the user's input) and passes it as an argument to the `eval` function. The `eval` function interprets and executes the string as a JavaScript expression, and the result is assigned back to `string`.

This functionality makes the calculator versatile and user-friendly, allowing users to enter and evaluate expressions just like a traditional calculator.



