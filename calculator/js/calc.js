let display = document.getElementById('display');
let display1 = document.querySelectorAll('.display1')[0];
let operator = '';
let previousValue = '';

function appendNumber(num) {
    if (display.value === '0' && num !== '.') {
        display.value = num;
    } else {
        display.value += num;
    }
}

function setOperator(op) {
    if (display.value === '') return;
    previousValue = display.value;
    operator = op;
    display1.value = operator; 
    display.value = '0'; 
}

function calculate() {
    if (operator === '' || previousValue === '' || display.value === '') return;
    
    let result;
    const prev = parseFloat(previousValue);
    const current = parseFloat(display.value);
    
    if (operator === '+') result = prev + current;
    else if (operator === '−') result = prev - current;
    else if (operator === '×') result = prev * current;
    else if (operator === '÷') result = prev / current;
    
    display.value = result;
    display1.value = '';
    operator = '';
    previousValue = '';
}

function clearDisplay() {
    display.value = '0';
    display1.value = '';
    operator = '';
    previousValue = '';
}

function deleteLast() {
    if (display.value === '') return;
    display.value = display.value.slice(0, -1);
    if (display.value === '') display.value = '0';
}
