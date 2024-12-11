function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  return a / b;
}

export function run(operation, x, y) {
  console.log(operation);
  console.log(x, y);

  if (operation === "sum") {
    return sum(a, b);
  }

  if (operation === "multiply") {
    return multiply(a, b);
  }

  if (operation === "subtract") {
    return subtract(a, b);
  }

  if (operation === "divide") {
    return divide(a, b);
  }
}
