const display = document.getElementById("displayText");

// Nodelist of all buttons
const buttons = document.querySelectorAll("button");

// Array of all buttons with value (number buttons).

const numberButtons = Array.from(buttons).filter((button) => {
    if (button.value != "") {
        return (button)
    }
});

const logNumber = (button) => {
    console.log(button.target.value)
    display.textContent = button.target.value;
}

for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener("click", logNumber)
}

const clearDisplay = () => { // Will clear display upon being run.
    display.textContent = "0";
}

const clearButton = document.getElementById("clear").addEventListener("click", clearDisplay);

