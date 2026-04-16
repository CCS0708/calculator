const calc = {
  number1: '',
  number2: '',
  operator: '',
  current: '',
  result: '',
  
  add: function() {
    this.result = this.number1 + this.number2;
  },
  subtract: function() {
    this.result = this.number1 - this.number2;
  },
  multiply: function() {
    this.result = this.number1 * this.number2;
  },
  divide: function() {
    this.result = this.number1 / this.number2;
  },
  clear: function() {
    this.number1 = '';
    this.number2 = '';
    this.operator = '';
    this.current = '';
  },
  operate: function() {
    const operator = this.operator;

    if (!operator) return;

    if (operator === '+') {
      this.add();
    } else if(operator === '-'){
      this.subtract();
    } else if(operator === '*'){
      this.multiply();
    } else if(operator === '/'){
      this.divide();
    } 

    this.result = +this.result.toFixed(5);
    if (!isFinite(this.result)) {
      this.result = 'Math error';
    }
    this.result = String(this.result);
  
    this.clear();
    this.current = this.result;
    renderDisplay();
  }

}
const numberContainer = document.querySelector('.numbers');
const operatorContainer = document.querySelector('.operators');

renderPage();

function renderPage() {
  generateNumberButtons();
  addButtonElement('Clear', 'clear', handleClearClick, operatorContainer);
  generateOperatorButtons();
  addButtonElement('=', 'equal', handleEqualClick, numberContainer);
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
  if (calc.current === calc.result){
    calc.current = '';
  }

  calc.current += e.target.textContent;
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
  if (calc.current === 'Math error') {
    calc.clear();
    return;
  }

  if ((calc.operator && calc.current)) {
    calc.number2 = +calc.current;
    calc.current = '';
    calc.operate();
  }
  if (calc.current && !calc.number2) {
    calc.number1 = +calc.current;
    calc.current = '';
    calc.operator = operatorNow;
    console.log('add operator', calc);

  } else if (calc.number1) {
    calc.operator = operatorNow;
    console.log('change operator', calc);
  } 

}

function renderDisplay() {
  const display = document.querySelector('#display');
  display.textContent = calc.current;
  console.log(calc);
}

function handleEqualClick(e) {
  if (!calc.operator) return;

  calc.number2 = +calc.current;
  calc.current = '';
  calc.operate();
  
}

function handleClearClick(e) {
  calc.clear();
  renderDisplay();
}