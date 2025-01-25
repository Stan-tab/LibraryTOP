const myLibrary = [];
const book = document.querySelector(".books");
book.replaceChildren("");

function Book(name, author, year, isRead) {
    this.name = name;
    this.author = author;
    this.year = year;
    this.read = isRead;
}

function addBookLibrary(name, author, year, isRead) {
    const cool = new Book(name, author, year, isRead);
    myLibrary.push(cool);
}