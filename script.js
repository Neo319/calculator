console.log ("here");

function add (x, y) {return x + y};
function sub (x, y) {return x - y};
function mult (x, y) {return x * y};
function divide (x, y) {return x / y};


function operate (x, operator, y) {
    if (operator == "+") {return add (x, y)}
    else if (operator == "-") {return sub (x, y)}
    else if (operator == "*") {return mult (x, y)}
    else if (operator == "/") {return divide (x, y)}
    else console.log('operator error');
}


let display = document.getElementById("display");
display.textContent = "0.00";
let value = '';

const buttons = document.getElementById("buttons");
const digits = buttons.querySelectorAll(".digit"); 
console.log(digits);

digits.forEach((button) => {
    button.addEventListener("click", () => {
        value += button.id;
        display.textContent = value;
    });
});

let valueOne;
let operation;

const operators = document.querySelectorAll(".operator")
operators.forEach((button) => {
    button.addEventListener("click", () => {
        valueOne = value;
        value = 0;
        operation = button.id;
        console.log (`${valueOne} ${operation}`)

    })
});




