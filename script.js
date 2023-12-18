let colorOne = document.getElementById("color-one");
let colorTwo = document.getElementById("color-two");
let currentDirection = "to top";
let outputCode = document.getElementById("code");

function setDirection(value, button) {
  let directions = document.querySelectorAll(".buttons button");
  for (let i of directions) {
    i.classList.remove("active");
  }
  button.classList.add("active");
  currentDirection = value;
}

function generateCode() {
  outputCode.value = `background-image: linear-gradient(${currentDirection}, ${colorOne.value}, ${colorTwo.value})`;
  document.body.style.backgroundImage = `linear-gradient(${currentDirection}, ${colorOne.value}, ${colorTwo.value})`;
}

function copyText() {
  outputCode.select();
  document.execCommand("copy");
  alert("Gradient Copied!");
}

generateCode();
