// script.js
let currentValue = '';

function updateDisplay(value) {
    document.getElementById('display').value = value;
}

function clearDisplay() {
    currentValue = '';
    updateDisplay(currentValue);
}

function handleButtonClick(buttonValue) {
    if (buttonValue === '=') {
        try {
            currentValue = eval(currentValue);
        } catch (error) {
            currentValue = 'Error';
        }
    } else {
        currentValue += buttonValue;
    }
    updateDisplay(currentValue);
}

// Attach event listeners to digit and operator buttons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        handleButtonClick(button.textContent);
    });
});
