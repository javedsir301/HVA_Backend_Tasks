// Define and Populate the student Object
let student = {};
student.name = "Javed";
student.email = "javed@gmail.com";
student.age = 20;

console.log("Student name:", student.name);

// Update the student Object
student.age = 21;
console.log("Updated student age:", student.age);

// Add Method and Nested Object to student
student.greet = function() {
  console.log(`Hello, ${this.name}!`);
};
student.greet();

student.address = {
  country: "India",
  city: "Gurugram",
  pin_code: "120001"
};

console.log("Student country:", student.address.country);

student.address.pin_code = "122015";
console.log("Updated student address:", student.address);

// Create and Populate the friend Object
let friend = {
  name: "Vishal",
  email: "vishal@gmail.com",
  age: 28,
  address: {
    country: "India",
    city: "Gurugram",
    pin_code: "120001"
  },
  greet: function() {
    console.log(`Hello, ${this.name}!`);
  }
};

friend.greet();
console.log("Friend object:", friend);

// Create and Populate the topper Object
let topper = {
  name: "Parvej",
  email: "parvej@gmail.com",
  age: 22,
  address: {
    country: "India",
    city: "Gurugram",
    pin_code: "120001"
  },
  greet: function() {
    console.log(`Hello, ${this.name}!`);
  }
};

topper.greet();
console.log("Topper object:", topper);

// Define and Use the Student Class
class Student {
  constructor(name, email, age, country, city, pin_code) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.address = {
      country: country,
      city: city,
      pin_code: pin_code
    };
  }

  greet() {
    console.log(`Hello, ${this.name}!`);
  }

  getFullAddress() {
    return `${this.address.country}, ${this.address.city} - ${this.address.pin_code}`;
  }
}

// Create and Log Student Objects
let student1 = new Student("Bhuvan", "bhuvan@example.com", 20, "India", "Bangalore ", "560038");
let student2 = new Student("Shreyas", "shreyas@example.com", 21, "India", "Bangalore ", "560038");
let student3 = new Student("Vishal", "vk@example.com", 22, "India", "Bangalore ", "560038");

console.log("Student 1:", student1);
console.log("Student 2:", student2);
console.log("Student 3:", student3);

// Call the greet Method and getFullAddress Method on Student Objects
student1.greet();
console.log("Student 1 full address:", student1.getFullAddress());

student2.greet();
console.log("Student 2 full address:", student2.getFullAddress());

student3.greet();
console.log("Student 3 full address:", student3.getFullAddress());