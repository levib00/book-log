//TODO find a way to tie library elements to DOM elements.

let myLibrary = [
    book = {
        author: "Marie Lu",
        pageCount: "300",
        status: "Read",
        title: "Legend"
    },
    {
        author: "Marie Lul",
        pageCount: "3001",
        status: "UNRead",
        title: "Legendary"
    }
];

function Book(title, author, pageCount, status) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.status = status;
}

function addBookToLibrary() {
    const book = new Book(`Legend${i}`, "Marie Lu", "300", "Read");
    myLibrary.push(book);
    createListItem()
    console.log(myLibrary)
    i += 1;
}

const button = document.getElementById("add-button");
button.addEventListener("click", addBookToLibrary, false);

let i = 0
function displayList() {
    for (Object in myLibrary) {
        createListItem()
        i += 1;
    }
}

function createListItem() {
    
    const listContainer = document.getElementById("booklist-container");

    const bookContainer = document.createElement("div");
    bookContainer.setAttribute("class","booklist-item");
    listContainer.append(bookContainer)
    
    const bookTitle = document.createElement("div");
    bookTitle.setAttribute("class","book-info");
    bookContainer.append(bookTitle)
    bookTitle.innerHTML = myLibrary[i].title;

    const bookAuthor = document.createElement("div");
    bookAuthor.innerHTML = myLibrary[i].author
    bookAuthor.setAttribute("class","book-info");
    bookContainer.append(bookAuthor)

    const bookPages = document.createElement("div");
    bookPages.innerHTML = myLibrary[i].pageCount;
    bookPages.setAttribute("class","book-info");
    bookContainer.append(bookPages)

    const bookStatus = document.createElement("div");
    bookStatus.innerHTML = myLibrary[i].status;
    bookStatus.setAttribute("class","book-info");
    bookContainer.append(bookStatus);
}

function createBookForm() {
    
}

displayList();