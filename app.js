const numBtns = document.querySelectorAll(".num-btns");
const operatorBtns = document.querySelectorAll(".operator-btns");
const screen = document.querySelector(".screen");
const equalBtn = document.querySelector(".equal-btn");

let operatorArray = [];
let numArray = [];
const operators = ["+", "-", "/", "*"];
let num1;
let num2;
let operator;

// Math Functions

const operate = (a, b, str) => {
  if (str === "+") {
    return a + b;
  }
  if (str === "-") {
    return a - b;
  }
  if (str === "*") {
    return a * b;
  }
  if (str === "/") {
    return a / b;
  }
};

const showNumbers = (data) => {
  screen.textContent += data;
  screen.style.fontSize = "2.5rem";
  numArray.push(screen.textContent);
  const poppedStr = numArray.pop();
  const numStr = poppedStr.split(/[+*\/-]/);
  console.log(poppedStr);
  console.log(numStr);
  num1 = Number(numStr[0]);
  num2 = Number(numStr[1]);
  console.log(num1, num2);
};

const showOperators = (data) => {
  screen.textContent += data;
  screen.style.fontSize = "2.5rem";
  operatorArray.push(data);
  console.log(operatorArray);
  operator = operatorArray[0];
  console.log(operator);
};

const showEqual = (data) => {
  screen.textContent += data;
  screen.style.fontSize = "2.5rem";
};

// calNumbers();

numBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let data = btn.textContent;
    showNumbers(data);
  });
});

operatorBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let data = btn.textContent;
    showOperators(data);
    // calNumbers(numArray)
  });
});

equalBtn.addEventListener("click", (e) => {
  const result = operate(num1, num2, operator);
  screen.textContent = result;
  console.log(e);
});
