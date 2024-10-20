// Define the Employee Class
class Employee {
  constructor(name, email, age, department, position, salary) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.department = department;
    this.position = position;
    this.salary = salary;
  }

  // Method to introduce the employee
  employeeData() {
    console.log(`Hello, I am ${this.name}, ${this.position}`);
  }

  // Method to display the employee's salary
  employeeSalary() {
    console.log(`Salary: $${this.salary}`);
  }
}

// Create and log employee objects
const newEmployee = new Employee(
  "Javed",
  "javed@company.com",
  21,
  "IT",
  "Software Developer",
  35000
);
console.log("New Employee:", newEmployee);

const manager = new Employee(
  "Vishal",
  "vishal@company.com",
  22,
  "IT",
  "Web Developer",
  40000
);
console.log("Manager:", manager);

// Call methods on employee objects
console.log("\nNew Employee Introduction:");
newEmployee.employeeData();
newEmployee.employeeSalary();

console.log("\nManager Introduction:");
manager.employeeData();
manager.employeeSalary();
