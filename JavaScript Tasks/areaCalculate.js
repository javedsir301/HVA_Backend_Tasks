function calculateArea(width, height) {
  return width * height;
}

function calculateAreaWithDefaults(width = 9, height = 1) {
  return width * height;
}

const calculateAreaFunction = function (width, height) {
  return width * height;
};

const calculateAreaArrow = (width, height) => width * height;

console.log(calculateArea(9, 5));
console.log(calculateAreaWithDefaults());
console.log(calculateAreaWithDefaults(15, 10));
console.log(calculateAreaFunction(9, 2));
console.log(calculateAreaArrow(5, 10));
