const resultInput = document.getElementById('result');

function insert(num) {
    resultInput.value += num;
}

function clearScreen() {
    resultInput.value = '';
}

function deleteLast() {
    resultInput.value = resultInput.value.slice(0, -1);
}

function calculate() {
    try {
        resultInput.value = calculateExpression(resultInput.value);
    } catch (e) {
        alert('Invalid expression');
    }
}

function calculateExpression(expression) {
    const operators = ['+', '-', '*', '/'];
    let values = expression.split(/([+\-*/])/);
    values = values.filter(v => v);

    for (let i = 0; i < operators.length; i++) {
        while (values.includes(operators[i])) {
            let opIndex = values.indexOf(operators[i]);
            let left = parseFloat(values[opIndex - 1]);
            let right = parseFloat(values[opIndex + 1]);
            let result;
            switch (operators[i]) {
                case '+':
                    result = left + right;
                    break;
                case '-':
                    result = left - right;
                    break;
                case '*':
                    result = left * right;
                    break;
                case '/':
                    if (right === 0) {
                        alert("Division by zero is not allowed.");
                        return '';
                    }
                    result = left / right;
                    break;
            }
            values.splice(opIndex - 1, 3, result);
        }
    }
    return values[0];
}


document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (key >= '0' && key <= '9' || key === '.' || key === '/' || key === '*' || key === '-' || key === '+') {
        insert(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Backspace') {
        deleteLast();
    } else if (key === 'Escape') {
        clearScreen();
    }
});