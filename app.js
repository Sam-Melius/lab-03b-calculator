// import functions and grab DOM elements
import { add, divide, multiply, subtract } from './math-utils.js';


const add1 = document.getElementById('add-in-1');
const add2 = document.getElementById('add-in-2');
const addButton = document.getElementById('add-button');
const addResult = document.getElementById('add-result');


// initialize state
addButton.addEventListener('click', () => {
  const number1 = +add1.value;
  const number2 = +add2.value;

  const result = add(number1, number2);

  addResult.textContent = result;
});

/* new */
const sub1 = document.getElementById('sub-in-1');
const sub2 = document.getElementById('sub-in-2');
const subButton = document.getElementById('sub-button');
const subResult = document.getElementById('sub-result');


// initialize state
subButton.addEventListener('click', () => {
  const number1 = +sub1.value;
  const number2 = +sub2.value;

  const result = subtract(number1, number2);

  subResult.textContent = result;
});

/* new */
const mult1 = document.getElementById('mult-in-1');
const mult2 = document.getElementById('mult-in-2');
const multButton = document.getElementById('mult-button');
const multResult = document.getElementById('mult-result');


// initialize state
multButton.addEventListener('click', () => {
  const number1 = +mult1.value;
  const number2 = +mult2.value;

  const result = multiply(number1, number2);

  multResult.textContent = result;
});

/* new */
const div1 = document.getElementById('div-in-1');
const div2 = document.getElementById('div-in-2');
const divButton = document.getElementById('div-button');
const divResult = document.getElementById('div-result');


// initialize state
divButton.addEventListener('click', () => {
  const number1 = +div1.value;
  const number2 = +div2.value;

  const result = divide(number1, number2);

  divResult.textContent = result;
});