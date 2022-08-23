const btns = document.querySelectorAll(".btns");
const screen = document.querySelector(".screen");
const equalBtn = document.querySelector(".equal-btn");

let numArray = [];

// Math Functions
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const operate = (str, a, b) => {
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

  console.log(poppedStr, typeof poppedStr);

  const numStr = poppedStr.split(/[+*\/-]/);
  // const newArray = new Array(numStr);
  console.log(numStr);
  // console.log(screen.textContent);

  // numArray.shift();
  // console.log(numArray);
};

const calNumbers = (array) => {
  console.log(numArray);
};

calNumbers();

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let data = btn.textContent;
    showNumbers(data);
  });
});

equalBtn.addEventListener("click", () => {
  console.log("clicked!");
});
