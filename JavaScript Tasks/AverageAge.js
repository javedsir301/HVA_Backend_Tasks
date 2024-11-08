
let people = [
    { name: "Akhtar", age: 21 },
    { name: "Vishal", age: 23 },
    { name: "Nitin", age: 22 },
    { name: "Abhishek", age: 20 },
    { name: "Rahul", age: 25 }
];

function calculateAverageAge(people) {
    let totalAge = 0;
    people.forEach(function(person) {
        totalAge += person.age; 
    });
    let averageAge = totalAge / people.length;
    return averageAge;
}
let averageAge = calculateAverageAge(people);

console.log("The average age is:", averageAge);
