const numBtns = document.querySelectorAll(".num-btns");
const operatorBtns = document.querySelectorAll(".operator-btns");
const screen = document.querySelector(".screen");
const equalBtn = document.querySelector(".equal-btn");

let numArray = [];
let operatorArray = [];
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
  // const poppedStr = numArray.pop();
  let numStrArray = numArray.pop().split(/[+*\/-]/);
  // console.log(poppedStr);
  console.log(numStrArray);
  return numStrArray;
};

const showOperators = (data) => {
  screen.textContent += data;
  screen.style.fontSize = "2.5rem";
  operatorArray.push(data);
  console.log(operatorArray);
  return operatorArray;
};

const calcNumbers = () => {
  const returnedNum = showNumbers();

  if (returnedNum.length === 2) {
    num1 = Number(returnedNum[0]);
    num2 = Number(returnedNum[1]);
    console.log(num1, num2);
  }

  if (operatorArray.length === 1) {
    operator = operatorArray[0];

    const calcResult = operate(num1, num2, operator);
    console.log(calcResult);
    returnedNum.unshift(toString(calcResult));
    operatorArray.pop();
  }
};

console.log(calcNumbers());

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
  const finalResult = calcNumbers();
  console.log(finalResult);
  screen.textContent = finalResult;
  screen.style.fontSize = "2.5rem";
});
