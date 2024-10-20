// Callback Functions
function doubleNum(num) {
  return num * 2;
}

function squareNum(num) {
  return num * num;
}

function incrementNum(num) {
  return num + 1;
}

// Higher-Order Function
function performOperation(num, operation) {
  return operation(num);
}

console.log(performOperation(5, doubleNum));
console.log(performOperation(9, squareNum)); 
console.log(performOperation(15, incrementNum)); 
