let temperatures = [-3, 14, 22, 5, -10];

// Iterate and Log Using forEach()
temperatures.forEach(function(temp) {
  console.log(temp);
});

temperatures.forEach((temp) => {
  console.log(temp);
});

// Iterate, Convert to Fahrenheit and Log Using forEach()
temperatures.forEach(function(temp) {
  let fahrenheit = (temp * 9/5) + 32;
  console.log(fahrenheit);
});

temperatures.forEach((temp) => {
  let fahrenheit = (temp * 9/5) + 32;
  console.log(fahrenheit);
});

// Iterate and Create a New Modified Array Using map() 
let temperaturesInFahrenheit = temperatures.map(function(temp) {
  return (temp * 9/5) + 32;
});
console.log(temperaturesInFahrenheit);

temperaturesInFahrenheit = temperatures.map((temp) => {
  return (temp * 9/5) + 32;
});
console.log(temperaturesInFahrenheit);

// Iterate and Create a New Filtered Array Using filter() 
let belowFreezing = temperatures.filter(function(temp) {
  return temp < 0;
});
console.log(belowFreezing);

belowFreezing = temperatures.filter((temp) => temp < 0);
console.log(belowFreezing);
