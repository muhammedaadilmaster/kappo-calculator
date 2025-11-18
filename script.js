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
        resultInput.value = eval(resultInput.value);
    } catch (e) {
        alert('Invalid expression');
    }
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