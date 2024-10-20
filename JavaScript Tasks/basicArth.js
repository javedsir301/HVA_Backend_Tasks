// Callback Functions
function addNumbers(firstNum, secondNum) {
  return firstNum + secondNum;
}

function multiplyNumbers(firstNum, secondNum) {
  return firstNum * secondNum;
}

function subtractNumbers(firstNum, secondNum) {
  return firstNum - secondNum;
}

function divideNumbers(firstNum, secondNum) {
  if (secondNum === 0) {
    return "Error: Division by zero";
  }
  return firstNum / secondNum;
}

// Higher-Order Function
function arithmeticOperation(firstNum, secondNum, operation) {
  return operation(firstNum, secondNum);
}

// Calling arithmeticOperation with different callback functions
console.log(arithmeticOperation(9, 7, addNumbers));
console.log(arithmeticOperation(9, 2, multiplyNumbers));
console.log(arithmeticOperation(9, 3, subtractNumbers));
console.log(arithmeticOperation(9, 3, divideNumbers));

// Edge case with divide by zero
console.log(arithmeticOperation(5, 0, divideNumbers));
