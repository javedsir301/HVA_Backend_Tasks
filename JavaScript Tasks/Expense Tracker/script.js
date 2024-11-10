class Expense {
    constructor(id, name, amount, date) {
        this.id = id;
        this.name = name;
        this.amount = amount;
        this.date = date;
    }
}

let expenses = [];

function displayExpenses() {
    const expenseList = document.getElementById('expenses');
    expenseList.innerHTML = '';
    expenses.forEach(expense => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${expense.name} - ₹${expense.amount} (${expense.date})</span>
            <div class="expense-actions">
                <button class="update-amount" data-id="${expense.id}">Update</button>
                <button class="remove-expense" data-id="${expense.id}">Remove</button>
            </div>
        `;
        expenseList.appendChild(li);
    });
}

function addExpense(name, amount, date) {
    const id = Date.now().toString();
    const newExpense = new Expense(id, name, amount, date);
    expenses.push(newExpense);
    displayExpenses();
}

function updateExpense(id, newAmount) {
    const expense = expenses.find(exp => exp.id === id);
    if (expense) {
        expense.amount = newAmount;
        displayExpenses();
    }
}

function updateExpenseWithMap(id, newAmount) {
    expenses = expenses.map(exp => 
        exp.id === id ? { ...exp, amount: newAmount } : exp
    );
    displayExpenses();
}

function removeExpense(id) {
    expenses = expenses.filter(exp => exp.id !== id);
    displayExpenses();
}

// Event Listeners
document.getElementById('expense-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('expense-name').value;
    const amount = document.getElementById('expense-amount').value;
    const date = document.getElementById('expense-date').value;
    addExpense(name, amount, date);
    this.reset();
});

document.getElementById('expenses').addEventListener('click', function(e) {
    if (e.target.classList.contains('remove-expense')) {
        const id = e.target.getAttribute('data-id');
        removeExpense(id);
    }
    if (e.target.classList.contains('update-amount')) {
        const id = e.target.getAttribute('data-id');
        const newAmount = prompt('Enter new amount:');
        if (newAmount !== null && newAmount !== '') {
            updateExpenseWithMap(id, parseFloat(newAmount));
        }
    }
});

// Initial display
displayExpenses();