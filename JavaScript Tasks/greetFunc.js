function greet(teamName) {
  return `${teamName}!`;
}

function greetDefault(name = "Everyone") {
  return `Hello, ${name}`;
}

const greetFunction = function (name) {
  return `I am ${name}!`;
};

const greetArrow = (name) => `${name}`;


console.log(greet("Web-dev-6"));
console.log(greetDefault());
console.log(greetFunction("Javed Akhtar"));
console.log(greetArrow("Learner Together"));
