// Math Operator Functions
const add = (firstNumber, secondNumber) => {
    return firstNumber + secondNumber
}

const subtract = (firstNumber, secondNumber) => {
    return firstNumber - secondNumber
}

const multiply = (firstNumber, secondNumber) => {
    return firstNumber * secondNumber
}

const divide = (firstNumber, secondNumber) => {
    return firstNumber / secondNumber
}

const modulus = (firstNumber, secondNumber) => {
    return firstNumber % secondNumber
}

let firstNumber, secondNumber, operator, display, displayValue;

const operate = () => {
    switch (operator) {
        case "+":
            populateDisplay(add(firstNumber, secondNumber));
            break;
        case "-":
            return subtract(firstNumber, secondNumber);
        case "*":
            return multiply(firstNumber, secondNumber);
        case "/":
            return divide(firstNumber, secondNumber);
        case "%":
            return modulus(firstNumber, secondNumber);
    }
}

display = document.getElementById("displayText");

displayValue = 0;

const populateDisplay = (value) => {
    display.textContent = value;
    return;
}
populateDisplay(displayValue)

const clearDisplay = () => {
    display.textContent = "0"
    displayValue = 0;
    firstNumber = 0;
    secondNumber = 0;
    operator = 0;
}

const saveNumber = (value) => {
    value = value.target.value;
    if (firstNumber === undefined) {
        firstNumber = value;
    } else if (secondNumber === undefined) {
        secondNumber = value;
    }
}



const numberButtons = Array.from(document.querySelectorAll("button")).filter((button) => {
    if (button.value != "") {
        return button;
    }
})

for (let i = 0; i < numberButtons.length; i++) { // Attach number buttons listeners
    numberButtons[i].addEventListener("click", saveNumber)
}

// Clear button
const clearButton = document.getElementById("clear");
clearButton.addEventListener("click", clearDisplay);

// Operator buttons
const addButton = document.getElementById("addition").addEventListener("click", () => {
    operator = "+"
})
const subtractButton = document.getElementById("subtract").addEventListener("click", () => {
    operator = "-"
})
const divideButton = document.getElementById("divide").addEventListener("click", () => {
    operator = "/"
})
const multiplyButton = document.getElementById("multiply").addEventListener("click", () => {
    operator = "*"
})
const modulusButton = document.getElementById("modulus").addEventListener("click", () => {
    operator = "%"
})

// Equals Button

const equalsButton = document.getElementById("equals").addEventListener("click", operate)