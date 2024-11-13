# Wiring up the calculator

> For this task, we will enhance the calculator developed in the preceding assignment using HTML/CSS by integrating JavaScript functionalities.

## Solution Preview

You can view the final solution in action through this GIF: [Solution GIF](https://i.imgur.com/YpdPMem.mp4)

## Implementation Steps

Follow these steps to integrate JavaScript functionality into your calculator:

1. Begin with your existing HTML/CSS code and create a new file named `main.js` to accommodate your JavaScript code.
2. Utilize a `script` tag in your `index.html` to incorporate your `main.js` file.
3. Proceed to wire up the calculator!

## Expected Features

Your enhanced calculator should exhibit the following functionalities:

- Display a maximum of two numbers and one operation on the screen simultaneously (e.g., `2+3`).
- Upon pressing the equal button, the calculator should compute the result of the expression and exhibit it on the screen.
  - If the expression is incomplete (e.g., no operation has been entered), no action should be taken.
- If an operation is pressed while the calculator already displays two numbers and an operation (e.g., `2+3`), the current expression should be calculated before setting the new operation.
- Pressing an operation button before entering any numbers should not trigger any action.
- The clear button should erase the entire screen.
- The dot button can be utilized to input decimal numbers.

## Suggested Approach

Various strategies can be employed to accomplish this task. You're encouraged to explore your preferred method. However, if you're seeking guidance, consider the functions outlined below for inspiration:

```javascript
// Store the two numbers and one operation as strings to facilitate character addition as users interact with the calculator
let firstNumber = '';
let operation = '';
let secondNumber = '';

// Calculate the result of the current expression, if valid, and display it on the screen
function calcResult() {
  // TODO
}

// Handle operations when operation buttons (+, -, /, *) are pressed
function operationPressed(op) {
  // TODO
}

// Handle numeric input
function numberPressed(number) {
  // TODO
}

// Clear the calculator screen
function clearScreen() {
  // TODO
}

// Update the screen based on `firstNumber`, `operation`, and `secondNumber`
function updateScreen() {
  // TODO
}

// TODO: Implement query selectors and add event listeners to the calculator buttons

