# Calculator
This is a simple and versatile calculator implemented in JavaScript. It provides basic arithmetic operations, including addition, subtraction, multiplication, and division, along with the ability to clear the input and display.

You can access the live calculator here: [Calculator]( https://hsimransidhu.github.io/Calculator/)

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

## Button Design Explanation

The following CSS code snippet defines the styling for the calculator buttons. It focuses on creating an appealing and interactive design for the buttons:

```css
/* Button Styling */
button {
    height: 60px;
    margin: 10px;
    border-radius: 50%;
    background: rgb(69, 69, 69);
    color: #ffffff;
    border: none;
    width: 60px;
    font-size: 20px;
    box-shadow: -8px -8px 15px rgba(99, 93, 93, 0.1);
    cursor: pointer;
}

button {
    transition: transform 0.2s ease;
}

button:hover {
    transform: translateY(-5px);
}

button:active {
    transform: translateY(5px);
}
```

The button design for this calculator is carefully crafted to provide an intuitive and engaging user experience. Here's a quick overview of the design:

- **Size and Spacing:** The buttons have a height of 60px, ensuring they are visually distinct. A margin of 10px separates them, making interactions comfortable.

- **Shape:** Buttons have a circular appearance achieved through a 50% border radius. This design choice adds a touch of elegance.

- **Color Scheme:** The buttons have a dark background color (rgb(69, 69, 69)) and white text (color: #ffffff), ensuring a high contrast for readability.

- **Visual Depth:** A subtle box shadow effect (-8px -8px 15px rgba(99, 93, 93, 0.1)) is applied to provide a sense of depth and make buttons stand out.

- **Pointer Cursor:** When users hover over a button, the cursor changes to a pointer, indicating that the buttons are interactive.

- **Interactive Feedback:** Buttons exhibit an engaging behavior with a smooth transition effect. When hovered over, they move 5 pixels upwards, and when clicked, they move 5 pixels downwards, providing visual feedback for user interactions.

This button design enhances the calculator's aesthetics and usability, making it both visually appealing and interactive for users.

## JS Code Explanation

This code snippet defines a JavaScript function that is responsible for calculating the result of a mathematical expression.

```javascript
// Function to calculate the result
function calculate(input) {
    try {
        // Use JavaScript's Function constructor to parse and evaluate the expression
        const result = new Function('return ' + input)();
        return result;
    } catch (error) {
        return 'Error';
    }
}
```

- `function calculate(input) { ... }`: This code introduces a JavaScript function named `calculate`. It is designed to accept an `input` parameter, which should be a mathematical expression provided as a string.

- `try { ... } catch (error) { ... }`: The code employs a try-catch block, which is a mechanism for handling potential errors. Inside the `try` block, the code attempts to execute a sequence of statements. If an error occurs during this execution, it is captured and managed in the `catch` block.

The try-catch block is a fundamental part of error handling in JavaScript, enabling the graceful management of exceptions and errors that may occur during code execution.

 
 



