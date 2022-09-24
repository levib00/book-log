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

function addBookToLibrary(title, author, pages, status) {
    const book = new Book(title, author, pages, status);
    myLibrary.push(book);
    createListItem();
    console.log(myLibrary);
    i += 1;
}

let i = 0
function displayList() {
    for (Object in myLibrary) {
        createListItem();
        i += 1;
    }
}

function createListItem() {
    const listContainer = document.getElementById("booklist-container");

    const listItemContainer = document.createElement("div");
    listItemContainer.setAttribute("class","booklist-item");
    listContainer.append(listItemContainer);
    
    const listItemTitle = document.createElement("div");
    listItemTitle.setAttribute("class","book-info");
    listItemContainer.append(listItemTitle);
    listItemTitle.innerHTML = myLibrary[i].title;

    const listItemAuthor = document.createElement("div");
    listItemAuthor.innerHTML = myLibrary[i].author;
    listItemAuthor.setAttribute("class","book-info");
    listItemContainer.append(listItemAuthor);

    const listItemPages = document.createElement("div");
    listItemPages.innerHTML = myLibrary[i].pageCount;
    listItemPages.setAttribute("class","book-info");
    listItemContainer.append(listItemPages);

    const listItemStatus = document.createElement("div");
    listItemStatus.innerHTML = myLibrary[i].status;
    listItemStatus.setAttribute("class","book-info");
    listItemContainer.append(listItemStatus);
}

const newBookButton = document.getElementById("new-book-button");
newBookButton.addEventListener("click", showBookForm, false);
const popup = document.getElementById("form-pop");

function showBookForm() {
    popup.setAttribute("class","show");
}

const addButton = document.getElementById("add-button");
addButton.addEventListener("click",addNewBook, false);

function addNewBook() {
    const title = document.getElementById("book-title-in").value;
    const author = document.getElementById("book-author-in").value;
    const pages = document.getElementById("book-pages-in").value;
    const status = document.getElementById("book-status").value;

    /*const title = titleIn.textContent;
    const author = authorIn.textContent;
    const pages = pagesIn.textContent;
    const status = statusIn.textContent;*/
    console.log(title, author, pages, status)

    addBookToLibrary(title, author, pages, status)

    popup.classList.remove("show");
}

displayList();