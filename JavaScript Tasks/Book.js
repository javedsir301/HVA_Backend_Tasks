// Define the Book Class
class Book {
  constructor(title, author, publisher, year, genre) {
    this.title = title;
    this.author = author;
    this.publisher = publisher;
    this.year = year;
    this.genre = genre;
  }

  // Method to describe the book
  describe() {
    console.log(`${this.title} - ${this.author} (${this.year})`);
  }

  // Method to display the genre of the book
  displayGenre() {
    console.log(`Genre: ${this.genre}`);
  }
}

// Create the classicBook object
const classicBook = new Book(
  "Pride and Prejudice",
  "Jane Austen",
  "T. Egerton",
  1813,
  "Classic"
);

// Create the sciFiBook object
const sciFiBook = new Book(
  "Dune",
  "Frank Herbert",
  "Chilton Books",
  1965,
  "Science Fiction"
);

// Log both objects to the console
console.log(classicBook);
console.log(sciFiBook);

// Call methods on classicBook
classicBook.describe(); 
classicBook.displayGenre(); 

// Call methods on sciFiBook
sciFiBook.describe(); 
sciFiBook.displayGenre(); 
