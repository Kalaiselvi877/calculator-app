function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function calculate(operation) {
    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;
    let result = document.getElementById("result");

    if (a === "" || b === "") {
        result.innerHTML = "Please enter both numbers";
        return;
    }

    a = Number(a);
    b = Number(b);

    if (!Number.isFinite(a) || !Number.isFinite(b)) {
        result.innerHTML = "Enter valid numbers";
        return;
    }

    if (operation === "divide" && b === 0) {
        result.innerHTML = "Cannot divide by zero";
        return;
    }

    let answer;

    if (operation === "add") answer = add(a, b);
    if (operation === "subtract") answer = subtract(a, b);
    if (operation === "multiply") answer = multiply(a, b);
    if (operation === "divide") answer = divide(a, b);

    result.innerHTML = "Result: " + answer;
}
