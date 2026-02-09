const   outputElement = document.getElementById("output");

function clearoutput(title){
    outputElement.textContent = title + "\n\n";
}
function forloop(){
    clearoutput("FOR LOOP");
    for (let i = 1; i <= 5; i++) {
        outputElement.textContent += "Iteration: " + i + "\n";
    }
}
function whileloop(){
    clearoutput("WHILE LOOP");
    let i = 1;
    while (i <= 5) {
        outputElement.textContent += "Iteration: " + i + "\n";
        i++;
    }
}
function doWhileloop(){
    clearoutput("DO-WHILE LOOP");
    let i = 1;
    do {
        outputElement.textContent += "Iteration: " + i + "\n";
        i++;
    } while (i <= 5);
}
function forofloop(){
    clearoutput("FOR...OF LOOP");
    const fruits = ["apple", "banana", "mango"];
    for (const fruit of fruits) {
        outputElement.textContent += fruit + "\n";
    }
}
function forinloop(){
    clearoutput("FOR...IN LOOP");
    const person = {fname:"John", lname:"Doe", age:25}; 
    for (const key in person) {
        outputElement.textContent += key + ": " + person[key] + "\n";}
}
function foreachloop(){
    clearoutput("FOREACH LOOP");
    const numbers = [10, 20, 30];                           
    numbers.forEach(function(number) {
        outputElement.textContent += number + "\n";
    }); 
}