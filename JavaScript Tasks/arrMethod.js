// Define and Initialize the Array
const numbers = [1, 2, 3, 4, 5];

// forEach() to log each number
numbers.forEach(function(number) {
  console.log(number);
});

// forEach() to log each number multiplied by 2
numbers.forEach(function(number) {
  console.log(number * 2);
});

// map() to create squaredNumbers array (function expression)
let squaredNum = numbers.map(function(number) {
  return number * number;
});
console.log(squaredNum);

// map() with arrow function
squaredNum = numbers.map(number => number * number);
console.log(squaredNum);

// filter() to create evenNumbers array (function expression)
let evenNum = numbers.filter(function(number) {
  return number % 2 === 0;
});
console.log(evenNum);

// filter() with arrow function
evenNum = numbers.filter(number => number % 2 === 0);
console.log(evenNum);