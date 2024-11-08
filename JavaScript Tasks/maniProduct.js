let products = [
    { id: 1, name: "Apple", price: 120, category: "Food" },
    { id: 2, name: "Banana", price: 60, category: "Food" },
    { id: 3, name: "Laptop", price: 80000.00, category: "Electronics" },
    { id: 4, name: "Shirt", price: 350.00, category: "Clothing" },
    { id: 5, name: "Orange", price: 20, category: "Food" },
    { id: 6, name: "Phone", price: 15000.00, category: "Electronics" },
    { id: 7, name: "Coffee Mug", price: 50.00, category: "Kitchen" }
];

function displayProducts(array) {
    array.forEach(function(product) {
        console.log(`${product.name} - ₹${product.price.toFixed(2)}`);
    });
}

function calculateProductsWithTax(products) {
    const taxRate = 0.10;
    let productsWithTax = products.map(function(product) {
        let priceWithTax = product.price + (product.price * taxRate);
        return {
            id: product.id,
            name: product.name,
            category: product.category,
            priceWithTax: priceWithTax
        };
    });
    console.log("\nProducts with Tax (10%):");
    displayProducts(productsWithTax.map(p => ({ name: p.name, price: p.priceWithTax })));
}

function filterFoodProducts(products) {
    let foodProducts = products.filter(function(product) {
        return product.category === "Food";
    });
    console.log("\nFood Products:");
    displayProducts(foodProducts);
}

function findAffordableProducts(products) {
    let affordableProducts = products.filter(function(product) {
        return product.price < 10;
    });
    let affordableProductsStrings = affordableProducts.map(function(product) {
        return `${product.name} - ₹${product.price.toFixed(2)}`;
    });

    console.log("\nAffordable Products:");
    console.log(affordableProductsStrings);
}

function calculateTotalPrice(products) {
    let totalPrice = 0;
    products.forEach(function(product) {
        totalPrice += product.price;
    });

    console.log("\nTotal Price of All Products: ₹" + totalPrice.toFixed(2));
}

console.log("All Products:");
displayProducts(products);
calculateProductsWithTax(products);
filterFoodProducts(products);
findAffordableProducts(products);
calculateTotalPrice(products);
