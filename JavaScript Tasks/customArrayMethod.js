//forEachArray function
function forEachArray(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array);  // Pass element, index, and the array itself
    }
}

//mapArray function
function mapArray(array, callback) {
    let newArray = []; 
    for (let i = 0; i < array.length; i++) {
        newArray.push(callback(array[i], i, array));  // Apply the callback and add to the new array
    }
    return newArray;
}

// filterArray function
function filterArray(array, callback) {
    let newArray = [];  
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {  // If callback returns true, include the element in newArray
            newArray.push(array[i]);
        }
    }
    return newArray;
}

let fruits = ["apple", "banana", "cherry", "date"];


console.log("Logging fruits in uppercase using forEachArray:");
forEachArray(fruits, function(fruit) {
    console.log(fruit.toUpperCase());
});

let upperFruits = mapArray(fruits, function(fruit) {
    return fruit.toUpperCase();
});
console.log("\nFruits in uppercase using mapArray:", upperFruits);


let longFruits = filterArray(fruits, function(fruit) {
   return fruit.length > 5;
});
console.log("\nFruits with more than 5 characters using filterArray:", longFruits);
    

