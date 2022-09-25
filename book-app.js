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

let i = 0;
function displayList() {
    for (Object in myLibrary) {
        createListItem();
        i += 1;
    }
}
//const BIC = document.getElementById(`${this.i}listItemContainer`);
function deleteListItem() {
    
    BIC.remove();
    console.log(this.i)
    
    for (; j < BIC.length; j++) {
        BIC[j].addEventListener('click', deleteListItem, false);
    }

}

const delButton = document.getElementsByClassName("del-button")



function createListItem() {
    const listContainer = document.getElementById("booklist-container");

    const listItemContainer = document.createElement("div");
    listItemContainer.setAttribute("class","booklist-item");
    listItemContainer.setAttribute("id", `${i}listItemContainer`)
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

    const delButton = document.createElement("button");
    delButton.setAttribute("type","button");
    delButton.setAttribute("class","del-button");
    delButton.innerHTML = "Del";
    listItemStatus.append(delButton);
}

const newBookButton = document.getElementById("new-book-button");
newBookButton.addEventListener("click", showBookForm, false);

const popup = document.getElementById("form-pop");
const header = document.getElementById("header");
const content = document.getElementById("content-container");

function showBookForm() {
    popup.setAttribute("class","show");
    content.setAttribute("class","blur");
    header.setAttribute("class", "blur");
}

const addButton = document.getElementById("add-button");
addButton.addEventListener("click",addNewBook, false);

function addNewBook() {
    const title = document.getElementById("book-title-in").value;
    const author = document.getElementById("book-author-in").value;
    const pages = document.getElementById("book-pages-in").value;
    const status = document.getElementById("book-status").value;

    console.log(title)
    
    if (title === "" || author === "" || pages === "" || status === "") 
    {
        return
    }

    addBookToLibrary(title, author, pages, status);

    closeForm();
}

const closeButton = document.getElementById("close-form");
closeButton.addEventListener("click", closeForm, false);

function closeFormButton() {
    document.getElementById("book-title-in").value = "";
    document.getElementById("book-author-in").value = "";
    document.getElementById("book-pages-in").value = "";
    document.getElementById("book-status").value = "";
    
    console.log(document.getElementById("book-title-in").value)

    closeForm()
}

function closeForm() {
    popup.classList.remove("show");
    header.classList.remove("blur");
    content.classList.remove("blur");
}
var form = document.getElementById("my-form");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

displayList();