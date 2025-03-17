let calculation = localStorage.getItem("calculation") || "";
updateDisplay();

function updateCalculation(value) {
  calculation += value;
  console.log(calculation);
  updateDisplay();
  saveCalculation();
}

function total() {
  calculation = eval(calculation);
  console.log(calculation);
  updateDisplay();
  saveCalculation();
}

function clearCalculation() {
  calculation = "";
  updateDisplay();
  localStorage.removeItem("calculation");
}

function saveCalculation() {
  localStorage.setItem("calculation", calculation);
}

function updateDisplay() {
  document.querySelector(".display-area").innerText = calculation || "0";
}
