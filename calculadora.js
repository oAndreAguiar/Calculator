function add(value1, value2) {
  return value1 + value2;
}

function subtract(value1, value2) {
  return value1 - value2;
}

function multiply(value1, value2) {
  return value1 * value2;
}

function divide(value1, value2) {
  return value1 / value2;
}

let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let operator = document.getElementById("operator");
let calculateButton = document.getElementById("calculate");
let result = document.getElementById("result");

calculateButton.addEventListener("click", function() {
  let x = Number(num1.value);
  let y = Number(num2.value);
  let operation = operator.value;


  // switch(operation){
  //   case "add": 
  //     result.textContent = x + " + " + y + " = " + add(x, y);
  //     break

  //   case "substract":
  //     result.textContent = x + " - " + y + " = " + subtract(x, y);
  //     break
    
  //   case "multiplay":
  //     result.textContent = x + " * " + y + " = " + multiply(x, y);
  //     break

  //   case "divide":
  //     result.textContent = x + " / " + y + " = " + divide(x, y);
  //     break

  //   default:
  //     result.textContent = "Opção inválida";
      
  // }

  if (operation === "add") {
    console.log(typeof(num1.value))
    result.textContent = x + " + " + y + " = " + add(x, y);
  } else if (operation === "subtract") {
    result.textContent = x + " - " + y + " = " + subtract(x, y);
  } else if (operation === "multiply") {
    const array = []
    for(let i = 1; i <= y; i++ ){
        array.push(multiply(x,i))
    }

    result.textContent = array

  } else if (operation === "divide") {
    result.textContent = x + " / " + y + " = " + divide(x, y);
  } else {
    result.textContent = "Opção inválida";
  }
});
