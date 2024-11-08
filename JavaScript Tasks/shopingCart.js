let cart = [
    { name: "Apple", price: 120, quantity: 8 },
    { name: "Banana", price: 60, quantity: 12 },
    { name: "Orange", price: 20, quantity: 3 },
    { name: "Milk", price: 2.50, quantity: 2 },
    { name: "Bread", price: 1.80, quantity: 1 }
];

function calculateTotalPrice(cart) {
    let totalPrice = 0;
    cart.forEach(function(item) {
        totalPrice += item.price * item.quantity;  
    });

    return totalPrice;
}

let totalPrice = calculateTotalPrice(cart);
console.log("The total price of the cart is: " + totalPrice.toFixed(2));
