const buttons = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '.', '=']
const operators = ['+', '-', '*', '/']
let number1 = '';
let operator;
let number2 = '';
const numberContainer = document.querySelector('.numbers');
const operatorContainer = document.querySelector('.operators');
// generate buttons element
for (let i of buttons){
  const button = document.createElement('button');
  button.textContent = i;
  button.classList.add('number');
  button.addEventListener('click',(e) => {
    if(!operator){
      number1 += e.target.textContent;
    } else {
      number2 += e.target.textContent;
    }
    console.log(number1)
    console.log(number2)
  })
  numberContainer.appendChild(button);
}
for (let i of operators) {
  const button = document.createElement('button');
  button.textContent = i;
  button.classList.add('operator');
  button.addEventListener('click', (e) => {
    if (number1){
      operator = e.target.textContent;
    }
  })
  operatorContainer.appendChild(button);
}

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

function operate(a, operator, b) {
  if (operator === '+') {
    return add(a, b);
  } else if(operator === '-'){
    return subtract(a, b);
  } else if(operator === '*'){
    return multiply(a, b);
  } else if(operator === '/'){
    return divide(a, b);
  }
}

