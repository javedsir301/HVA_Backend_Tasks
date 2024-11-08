let fruitsContainer = ["apple", "banana", "cherry", "date"];

//Log Using forEach()
fruitsContainer.forEach(function (fruit) {
  console.log(fruit.toUpperCase());
});

//Log Using forEach() - arrow function
fruitsContainer.forEach((fruit) => console.log(fruit.toUpperCase()));

//Calculate Total Characters Using forEach() - function expression
let totalCharacters = 0;
fruitsContainer.forEach(function (fruit) {
  totalCharacters += fruit.length;
});
console.log(totalCharacters);

//Calculate Total Characters Using forEach() - arrow function
totalCharacters = 0;
fruitsContainer.forEach((fruit) => {
  totalCharacters += fruit.length;
});
console.log(totalCharacters);

//Create a New Modified Array Using map() - function expression
let reversedFruits = fruitsContainer.map(function (fruit) {
  return fruit.split("").reverse().join("");
});
console.log(reversedFruits);

//Create a New Modified Array Using map() - arrow function
reversedFruits = fruitsContainer.map((fruit) => fruit.split("").reverse().join(""));
console.log(reversedFruits);

//Create a New Filtered Array Using filter() - function expression
let longFruits = fruitsContainer.filter(function (fruit) {
  return fruit.length > 5;
});
console.log(longFruits);

//Create a New Filtered Array Using filter() - arrow function
longFruits = fruitsContainer.filter((fruit) => fruit.length > 5);
console.log(longFruits);

//Create a New Filtered and Modified Array using filter() and map() - function expression
let aFruitsUpper = fruitsContainer
  .filter(function (fruit) {
    return fruit.includes("a");
  })
  .map(function (fruit) {
    return fruit.toUpperCase();
  });
console.log(aFruitsUpper);

//Create a New Filtered and Modified Array using filter() and map() - arrow function
aFruitsUpper = fruitsContainer
  .filter((fruit) => fruit.includes("a"))
  .map((fruit) => fruit.toUpperCase());
console.log(aFruitsUpper);
