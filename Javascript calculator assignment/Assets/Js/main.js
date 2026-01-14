 let display = document.getElementById("display");
    let firstNumber = "";
    let secondNumber = "";
    let operator = "";
    let isSecondNumber = false;

    function appendNumber(number) {
        if (!isSecondNumber) {
            firstNumber += number;
            display.innerText = firstNumber;
        } else {
            secondNumber += number;
            display.innerText = secondNumber;
        }
    }

    function appendOperator(op) {
        if (firstNumber === "") return;

        operator = op;
        isSecondNumber = true;
    }

    function calculate() {
        let num1 = parseFloat(firstNumber);
        let num2 = parseFloat(secondNumber);
        let result = 0;

        if (operator === "+") {
            result = num1 + num2;
        } 
        else if (operator === "-") {
            result = num1 - num2;
        } 
        else if (operator === "*") {
            result = num1 * num2;
        } 
        else if (operator === "/") {
            if (num2 === 0) {
                display.innerText = "Error";
                return;
            }
            result = num1 / num2;
        } 
        else {
            return;
        }

        display.innerText = result;
        firstNumber = result.toString();
        secondNumber = "";
        operator = "";
        isSecondNumber = false;
    }

    function clearDisplay() {
        firstNumber = "";
        secondNumber = "";
        operator = "";
        isSecondNumber = false;
        display.innerText = "0";
    }