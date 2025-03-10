// You need to implement the Library constructor function and its prototype methods

function Library() {
  // Initialize books property
  this.books = [];
}

// Define addBook method on Library's prototype
if (!Library.prototype.addBook) {
  Library.prototype.addBook = function (book) {
    this.books.push(book);
  };
}

// Define findBook method on Library's prototype
if (!Library.prototype.findBook) {
  Library.prototype.findBook = function (title) {
    if (this.books.includes(title)) {
      return "Book found";
    } else {
      return "Book not found";
    }
  };
}
