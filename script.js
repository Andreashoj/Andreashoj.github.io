const numbers = document.querySelectorAll('.number');
const add = document.querySelector('#add');
const clear = document.querySelector('.display-main').children;
const btnOperators = document.querySelectorAll('.operator');
const display = document.querySelector('.display');
const display2 = document.querySelector('.display2');
const output = document.querySelector('.output');
let displayOperator = '';
let numOne = 0;
let numTwo = 0;
let numSum = 0;
let calcSwitch = true;
let numAdder = false;
let passingOperator;
const operators = {
    add: function(a, b){ return a + b},
    substract: function(a, b) { return a - b},
    divide: function(a, b) { return a / b},
    multiply: function(a, b) { return a * b}
}

/* Numre får ID og udskriver det ID */
for (let i = 0; i < numbers.length; i++) {
    numbers[i].id += i;
    if (numbers[i].id == 10) {
        numbers[i].id = '.';
    }
    if (numbers[i].className == 'number') {
        numbers[i].onclick = numberGenerator;
     }
}

function numberGenerator() {
    let num = this.id;
    numAdder = false;
    if (calcSwitch == true && output.innerHTML.length == 0) {
        numOne += num;
        document.querySelector('.display').innerHTML = parseFloat(numOne, 10);
    } else if (calcSwitch == false && output.innerHTML.length == 0) {
        numTwo += num;
        document.querySelector('.display2').innerHTML = parseFloat(numTwo, 10);
    } 
}

/* Resultat */

window.document.querySelector('#sum').addEventListener('click', function(event){
    for (let key in operators) {
        if (key == passingOperator) {
            numOne = operators[key](parseFloat(numOne), parseFloat(numTwo));
        }
    }
    document.querySelector('.output').innerHTML = ' ' + numOne;
    numAdder = true;
    calcSwitch = true;
});

/* retuner operators id til passingoperator ved click */

for (var i = 0; i < btnOperators.length; i++) {

    if (btnOperators[i].className == 'operator') {
        btnOperators[i].onclick = returnID;
    }
}

function returnID() {
    passingOperator = this.id;
}

/* Display printer */

for(var i = 0; i < btnOperators.length; i++) {
btnOperators[i].addEventListener('click', function(event){
    if (passingOperator == 'divide') {
        displayOperator = '/'
    } else if (passingOperator == 'add') { 
        displayOperator = '+'
    } else if (passingOperator == 'substract') {
        displayOperator = '-'
    } else if (passingOperator == 'multiply') {
        displayOperator = '*'
    }
    if ( numAdder == false) {
        document.querySelector('.math-operator').innerHTML = displayOperator + '<br>';
    } else if (numAdder !== false) {
        document.querySelector('.math-operator').innerHTML = displayOperator + '<br>';      
        display.innerHTML = parseFloat(numOne);
        display2.innerHTML = '';
        numTwo = 0;
        document.querySelector('.output').innerHTML = '';
    }
    calcSwitch = false;
});
}

/* Clear buttons */

window.document.querySelector('#clearE').addEventListener('click', function(event) {
    for (var i = 0; i < clear.length; i++) {
        clear[i].innerHTML = '';
    }  
    numTwo = 0;
    numOne = 0;
    calcSwitch = true;   
});

window.document.querySelector('#clear').addEventListener('click', function(event){
    if (calcSwitch == true) {
        numOne = numOne.slice(0, -1)
        display.innerHTML = display.innerHTML.slice(0, -1)
    } else if (calcSwitch == false) {
        numTwo = numTwo.slice(0, -1);
        display2.innerHTML = display2.innerHTML.slice(0, -1)
    }
});  