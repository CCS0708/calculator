let number1 = 0;
let operator;
let number2 = 0;
let buttonContainer = document.querySelector('#button-container');
let count = 1;
for (let i = 7; i >= 0; i++){
  const button = document.createElement('button');
  button.textContent = i;
  button.classList.add('number');
  button.addEventListener('click',() => {
    
  })
  buttonContainer.appendChild(button);

  if (count === 3) {
    count = 1;
    i -= 6;
  } else {
    count += 1;
  }
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