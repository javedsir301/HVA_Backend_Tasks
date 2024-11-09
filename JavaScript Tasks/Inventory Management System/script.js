class Product {
    constructor(id, name, price, quantity,unit) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.unit = unit
    }
}

let inventory = [
    new Product(1, "Apple", 120, 1,"Kg"),
    new Product(2, "Banana", 60, 1,"Dozen"),
    new Product(3, "Orange", 30, 1,"Kg"),
    new Product(4, "Milk", 65, 1,"Ltr")
];

function displayProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; 
    inventory.forEach(product => {
        const listItem = document.createElement('li');
        listItem.textContent = `ID - ${product.id} : ${product.name} - ₹${product.price} (Quantity: ${product.quantity} ${product.unit})`;
        productList.appendChild(listItem);
    });
}

function addProduct(id, name, price, quantity) {
    const newProduct = new Product(id, name, price, quantity);
    inventory.push(newProduct);
    displayProducts();
}

function updateProduct(id, quantity) {
    const product = inventory.find(p => p.id === id);
    if (product) {
        product.quantity = quantity;
        displayProducts();
    } else {
        alert('Product not found!');
    }
}

function updateProductWithMap(id, quantity) {
    inventory = inventory.map(product => {
        if (product.id === id) {
            product.quantity = quantity;
        }
        return product;
    });
    displayProducts();
}

function removeProduct(id) {
    inventory = inventory.filter(product => product.id !== id);
    displayProducts();
}

document.getElementById('add-product-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('product-name').value;
    const price = parseFloat(document.getElementById('product-price').value);
    const quantity = parseInt(document.getElementById('product-quantity').value);
    const id = inventory.length ? inventory[inventory.length - 1].id + 1 : 1; 

    addProduct(id, name, price, quantity);
    this.reset();
});

document.getElementById('update-product-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const id = parseInt(document.getElementById('update-id').value);
    const quantity = parseInt(document.getElementById('update-quantity').value);

    updateProduct(id, quantity);  
    this.reset();
});

document.getElementById('remove-product-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const id = parseInt(document.getElementById('remove-id').value);
    removeProduct(id);
    this.reset();
});

displayProducts();
