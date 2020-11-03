function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function division(x, y) {
  return x / y;
}
//could it be possible to do something like "add(x,y) = Number (input1) +(input2)???"
var input1;
//console.log(typeof input1);
var input2;
var operation;

input1 = Number(prompt(`Enter any Integer`));
operation = prompt(`Enter any symbol (+ , - , * , /)`);
input2 = Number(prompt(`Enter any Integer`));

if (operation === "+") {
  console.log(`${input1} + ${input2} = ${add(input1, input2)}`);
} else if (operation === "-") {
  console.log(`${input1} - ${input2} = ${subtract(input1, input2)}`);
} else if (operation === "*") {
  console.log(`${input1} * ${input2} = ${multiply(input1, input2)}`);
} else if (operation === "/") {
  console.log(`${input1} / ${input2} = ${division(input1, input2)}`);
}
