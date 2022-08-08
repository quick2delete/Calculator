const btnsNum = document.querySelectorAll(".btns-num");
const screen = document.querySelector(".screen");

const numbers = [];

// Math Functions
const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const multiply = function (a, b) {
  return a * b;
};

const divide = function (a, b) {
  return a / b;
};

const operate = function (str, a, b) {
  if (str === "+") {
    return add(a, b);
  } else if (str === "-") {
    return subtract(a, b);
  } else if (str === "*") {
    return multiply(a, b);
  } else if (str === "/") {
    return divide(a, b);
  }
};

const showNumbers = function (value) {
  screen.textContent = "";
  screen.textContent = value;
  numbers.push(+(value));
  console.log(numbers)
};

btnsNum.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    console.log(e.target.innerText);
    const data = e.target.innerText;
    showNumbers(data);
  });
});

