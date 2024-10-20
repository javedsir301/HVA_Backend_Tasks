// Callback function for rectangle area
const areaOfRectangle = (length, width) => length * width;

// Callback function for circle area
const areaOfCircle = (radius) => Math.PI * radius ** 2;

// Callback function for triangle area
const areaOfTriangle = (base, height) => 0.5 * base * height;

// Function to calculate painting cost
const calculatePaintingCost = (dims1, dims2, calculateArea) => {
  const area = calculateArea(dims1, dims2);
  const costPerUnit = 2; 
  return area * costPerUnit;
};

// Calculate cost for painting a rectangle
const rectangleCost = calculatePaintingCost(7, 8, areaOfRectangle);
console.log(`Cost of painting the rectangle: ${rectangleCost.toFixed(2)}`);

// Calculate cost for painting a circle
const circleCost = calculatePaintingCost(9, null, areaOfCircle);
console.log(`Cost of painting the circle: ${circleCost.toFixed(2)}`);

// Calculate cost for painting a triangle
const triangleCost = calculatePaintingCost(9, 5, areaOfTriangle);
console.log(`Cost of painting the triangle: ${triangleCost.toFixed(2)}`);