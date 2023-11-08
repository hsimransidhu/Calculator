'use strict';

// Get the element with id 'Box'
let box = document.getElementById('Box');

// Select all button elements and store them in the variable 'buttons'
let buttons = document.querySelectorAll('button');

// Initialize variables to keep track of input and result
let currentInput = '';
let currentResult = '';

// Add click event listeners to the buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.innerHTML;

        switch (buttonText) {
            case '=':
                // When '=' is clicked, calculate the result and display it
                currentResult = calculate(currentInput);
                box.value = currentResult;
                break;
            case 'AC':
                // 'AC' clears the input and result
                currentInput = '';
                currentResult = '';
                box.value = '';
                break;
            case 'DEL':
                // 'DEL' removes the last character from the input
                currentInput = currentInput.slice(0, -1);
                box.value = currentInput;
                break;
            default:
                // For other buttons, append their content to the input
                currentInput += buttonText;
                box.value = currentInput;
        }
    });
});

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

