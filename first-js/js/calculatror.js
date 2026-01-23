let display = '';

function number(num) {
    display += num;
    document.getElementById('tv').innerHTML = display;
}

function Operator(op) {
    display += op;
    document.getElementById('tv').innerHTML = display;
}

function calculate() {
    document.getElementById('tv').innerHTML = "=";
    display = "=";
}

function deletehehe() {
    display = '';
    document.getElementById('tv').innerHTML = '';
}