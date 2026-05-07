/**
 * LIBRARY MANAGER
 * A class-based approach to managing a collection of objects.
 */
class LibraryManager {
  constructor() {
    this.books = [];
  }

  addBook(title, author) {
    this.books.push({ title, author });
    console.log(`Book added: "${title}"`);
  }

  removeBook(title) {
    const initialLength = this.books.length;
    this.books = this.books.filter((book) => book.title !== title);

    if (this.books.length < initialLength) {
      console.log(`Removed: "${title}"`);
    } else {
      console.log(`Book "${title}" not found.`);
    }
  }

  listBooks() {
    if (this.books.length === 0) {
      console.log("The library is empty.");
      return;
    }
    console.log("--- Library Collection ---");
    this.books.forEach((book) =>
      console.log(`- ${book.title} by ${book.author}`),
    );
  }
}

const myLibrary = new LibraryManager();
myLibrary.addBook("JavaScript Basics", "Najio");
myLibrary.addBook("Clean Code", "Robert Martin");
myLibrary.listBooks();
myLibrary.removeBook("JavaScript Basics");
myLibrary.listBooks();
