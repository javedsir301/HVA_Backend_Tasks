//Define the colors array
let colors = ["red", "green", "blue"];
console.log(colors[0]); 

//Modify and Add color elements
colors[1] = "yellow";
console.log(colors[1]);  

// Add a new color to the end of the array
colors.push("purple");
console.log(colors[colors.length - 1]);  

//Iterate using Loops over the colors array
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

let i = 0;
while (i < colors.length) {
    console.log(colors[i]);
    i++;
}

for (let color of colors) {
    console.log(color);
}

//Check Array Properties
console.log(typeof colors);  

// Log the length of the colors array
console.log(colors.length);  

//Array Methods
colors.push("orange");
console.log(colors);  

// Use pop method to remove the last color from the array
colors.pop();
console.log(colors); 

// Use indexOf method to find the index of "blue"
console.log(colors.indexOf("blue"));  

//Add and Iterate Over Properties
colors.owner = "Javed Akhtar";  

console.log(colors);  
for (let property in colors) {
    console.log(`${property}: ${colors[property]}`);
}


