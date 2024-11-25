const screen = document.getElementById('screen');
const buttons = document.querySelectorAll('.button');

let currentNumber = ''; 
let previousNumber = '' 
let operation = '';

function updateScreen(value) {
    screen.textContent = value;
}


function clearCalculator() {
    currentNumber = '';
    previousNumber = '';
    operation = '';
    updateScreen('');
}


function stringToNumber(str) {
    let num = 0;
    let isDecimal = false;
    let decimalFactor = 1;

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (char === '.') {
            isDecimal = true;
            continue;
        }
        if (isDecimal) {
            decimalFactor *= 10;
            num += (char.charCodeAt(0) - 48) / decimalFactor;
        } else {
            num = num * 10 + (char.charCodeAt(0) - 48);
        }
    }
    return num;
}

function calculate() {
    const num1 = stringToNumber(previousNumber);
    const num2 = stringToNumber(currentNumber);

    if (isNaN(num1) || isNaN(num2)) return;

    let result;
    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '×':
            result = num1 * num2;
            break;
        case '÷':
            result = num2 !== 0 ? num1 / num2 : 'Error';
        default:
            return;
    }

    currentNumber = `${result}`;
    previousNumber = '';
    operation = '';
    updateScreen(currentNumber);
}


buttons.forEach(button => {
    button.addEventListener('click', function() {
        const buttonType = this.classList.contains('number') ? 'number' :
                           this.classList.contains('operator') ? 'operator' :
                           this.classList.contains('equals') ? 'equals' :
                           this.classList.contains('clear') ? 'clear' : '';

        const buttonValue = this.textContent;

        switch (buttonType) {
            case 'number':
                if (currentNumber.includes('.') && buttonValue === '.') return;
                currentNumber += buttonValue;
                updateScreen(currentNumber);
                break;

            case 'operator':
                if (!currentNumber) return;
                if (previousNumber && currentNumber && operation) {
                    calculate();
                }
                previousNumber = currentNumber;
                currentNumber = '';
                operation = buttonValue;
                updateScreen(`${previousNumber} ${operation}`);
                break;

            case 'equals':
                if (!currentNumber || !previousNumber || !operation) return;
                calculate();
                break;

            case 'clear':
                clearCalculator();
                break;

            default:
                break;
        }
    });
});
