let number1 = '';
let operator = '';
let number2 = '';
let current = '';
let result = '';
const numberContainer = document.querySelector('.numbers');
const operatorContainer = document.querySelector('.operators');

renderPage();

function renderPage() {
  generateNumberButtons();
  generateOperatorButtons();
  addButtonElement('=', 'equal', handleOperatorClick, numberContainer)
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

function operate() {
  let result;
  if (operator === '+') {
    result = add(number1, number2);
  } else if(operator === '-'){
    result = subtract(number1, number2);
  } else if(operator === '*'){
    result = multiply(number1, number2);
  } else if(operator === '/'){
    result = divide(number1, number2);
  } 

  clear();

  current = result;
  renderDisplay();
}

function addButtonElement(text, className, handleClick, container) {
  const button = document.createElement('button');
    button.textContent = text;
    button.classList.add(className);
    button.addEventListener('click', handleClick)
    container.appendChild(button);
}

function generateNumberButtons() {
  const buttons = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '.'];

  for (let i of buttons){
    addButtonElement(i, 'number', handleNumberClick, numberContainer);
  }
}
function handleNumberClick(e) {
  current += e.target.textContent;
  renderDisplay();
}

function generateOperatorButtons() {
  const operators = ['+', '-', '*', '/']
  for (let i of operators) {
    addButtonElement(i, 'operator', handleOperatorClick, operatorContainer);

  }
}

function handleOperatorClick(e) {
  const operatorNow = e.target.textContent;
  if ((number1 && current) || operatorNow === '=') {
    number2 = +current;
    current = '';
    operate();
  } else if (current && !number2) {
    number1 = +current;
    current = '';
    operator = operatorNow;
  } else if (number1) {
    operator = operatorNow;
  } 

  
  renderDisplay();
}

function renderDisplay() {
  const display = document.querySelector('#display');
  display.textContent = current;
  console.log(current);
  console.log(operator);
}

function clear(){
  number1 = '';
  number2 = '';
  current = '';
  operator = '';
}