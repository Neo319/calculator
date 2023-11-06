console.log ("here");

function add (x, y) {return x + y};
function sub (x, y) {return x - y};
function mult (x, y) {return x * y};
function divide (x, y) {return x / y};


function operate (x, operator, y) {
    console.log(x + operator + y)
    x = parseInt(x);
    y = parseInt(y);
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
let operation = '';
let result = 0;

const operators = document.querySelectorAll(".operator")
operators.forEach((button) => {
    button.addEventListener("click", () => {
        if (typeof parseInt(value) != "number" || value === Infinity || value === -Infinity) {error()};

        // for each operator button,
        // if operation is currently empty: store it
        if (operation === '') {
            // if value is empty, assume result (starts at zero)
            if (value != '') valueOne = value
            else valueOne = result;
            
            value = '';
            operation = button.id;
            console.log (`${valueOne} ${operation}`);
            display.textContent = (`${valueOne} ${operation}`);
        }
        //if operation is not empty: evaluate, store result, begin new operation
        else if (operation != '' && value != '') {
            console.log(`new operation! ${valueOne + operation + value}`)
            valueOne = operate(valueOne, operation, value);
            value = '';
            operation = button.id;
            display.textContent = (`${valueOne} ${operation}`);
        }

        // if pressing operator button twice (value is empty)
        else if (operation != '' && value === '') {
            operation = button.id;
            display.textContent = (`${valueOne} ${operation}`);
        }
        

    })
});

const equals = document.getElementById("confirm")
equals.addEventListener("click", () => {
    result = operate (valueOne, operation, value)
    console.log(result);

    if (typeof parseInt(result) != "number" || result === Infinity || result === -Infinity) {error();
    } else {
    display.textContent = result;
    value = '';
    operation = ''
};
});

const clear = document.getElementById("clear");
clear.addEventListener("click", () => {
    display.textContent = 0.00;
    result = 0;
    value ='';
    valueOne = '';
    operation = '';
});

function error () {
    display.textContent = "ERROR";
    result = 0;
    value ='';
    valueOne = '';
    operation = '';

        
}



