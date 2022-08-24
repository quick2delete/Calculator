const numBtns = document.querySelectorAll(".num-btns");
const operatorBtns = document.querySelectorAll(".operator-btns");
const screen = document.querySelector(".screen");
const equalBtn = document.querySelector(".equal-btn");

let numArray = [];
let operatorArray = [];

// Math Functions
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const operate = (a, b, operator) => {
  if (str === "+") {
    return add(a, b);
  }
  if (str === "-") {
    return subtract(a, b);
  }
  if (str === "*") {
    return multiply(a, b);
  }
  if (str === "/") {
    return divide(a, b);
  }
};

const showNumbers = (data) => {

  screen.textContent += data;
  screen.style.fontSize = "2.5rem";

  numArray.push(screen.textContent);

  const poppedStr = numArray.pop();

  const numStr = poppedStr.split(/[+*\/-]/);

  console.log(numStr);
  console.log(screen.textContent);

  // console.log(numArray);
  return numStr;
  // return numArray;
};

const showOperators = (data) => {
  screen.textContent += data;
  screen.style.fontSize = "2.5rem";
  operatorArray.push(data);
  console.log(operatorArray);
  return operatorArray;
};

const showEqual = (data) => {
  screen.textContent += data;
  screen.style.fontSize = "2.5rem";
};

const calNumbers = (data1, data2) => {
  const array1 = showNumbers();
  const array2 = showOperators();

  for (i = 0; i < array1.length; i++) {
    for (j = 0; j < array2.length; j++) {
      operate(parseInt(array1[i], parseInt(array2[i + 1], array2[i])));
    }
  }

  console.log(array1[0], array1[1]);
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

equalBtn.addEventListener("click", () => {
  let data = equalBtn.textContent;
  console.log(data)
  // showEqual(data);
  calNumbers();
  console.log("clicked!");
});
