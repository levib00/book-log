//TODO find a way to tie library elements to DOM elements.

let myLibrary = [];

function Book(title, author, pageCount, status) {
    this.title = title
    this.author = author
    this.pageCount = pageCount
    this.status = status
    this.info = function() {
        return `${title} by ${author}, ${pageCount} pages, ${status}`
        }
}

function addBookToLibrary() {
    const book = new Book("Legend", "Marie Lu", "300", "read")
    myLibrary.push(book)
}