let i = 0;
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
        status: "Unread",
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
    i += 1;
}

function displayList() {
    for (Object in myLibrary) {
        createListItem();
        i += 1;
    }
}

function deleteListItem() {
    this.parentNode.parentNode.remove();    
}

let readCheckbox;
let unreadCheckbox;
let dnfCheckbox;
let readingCheckbox;

function createListItem() {
    const listContainer = document.getElementById("booklist-container");

    const listItemContainer = document.createElement("div");
    listItemContainer.setAttribute("class","booklist-item grid-container");
    listItemContainer.setAttribute("id", `${i}listItemContainer`)
    listContainer.append(listItemContainer);
    
    const listItemTitle = document.createElement("div");
    listItemTitle.setAttribute("class","book-info flex-container");
    listItemContainer.append(listItemTitle);
    listItemTitle.innerHTML = myLibrary[i].title;

    const listItemAuthor = document.createElement("div");
    listItemAuthor.innerHTML = myLibrary[i].author;
    listItemAuthor.setAttribute("class","book-info flex-container");
    listItemContainer.append(listItemAuthor);

    const listItemPages = document.createElement("div");
    listItemPages.innerHTML = myLibrary[i].pageCount;
    listItemPages.setAttribute("class","book-info flex-container");
    listItemContainer.append(listItemPages);

    listItemStatus  = document.createElement("div");
    listItemStatus.setAttribute("class","book-info flex-container");
    listItemStatus.setAttribute("id", "checkbox-align")
    listItemContainer.append(listItemStatus);

    const delButtonContainer = document.createElement("div")
    delButtonContainer.setAttribute("id","align-delete");
    delButtonContainer.setAttribute("class", "book-info flex-container")
    listItemContainer.append(delButtonContainer)

    const delButton = document.createElement("button");
    delButton.setAttribute("type","button");
    delButton.setAttribute("class","del-button button");
    delButton.innerHTML = "Delete";
    delButtonContainer.append(delButton);

    const deleteButton = document.querySelectorAll(".del-button")
    deleteButton.forEach((deleteButtons) => {
    deleteButtons.addEventListener('click', deleteListItem);
});
    createCheckboxes();
}

function createCheckboxes() {
    const readContainer = document.createElement("li");
    readContainer.setAttribute("class","checkbox-container flex-container");
    listItemStatus.append(readContainer);

    const readLabel = document.createElement("Label");
    readLabel.setAttribute("name", "read-box")
    readLabel.innerHTML = "Read"
    readContainer.append(readLabel)

    readCheckbox = document.createElement("input");
    readCheckbox.setAttribute("type", "radio")
    readCheckbox.setAttribute("id", "read-box")
    readCheckbox.setAttribute("name", `checkbox${i}`)
    readContainer.append(readCheckbox)

    const unreadContainer = document.createElement("li");
    unreadContainer.setAttribute("class","checkbox-container flex-container");
    listItemStatus.append(unreadContainer);

    const unreadLabel = document.createElement("Label");
    unreadLabel.setAttribute("name", "unread-box")
    unreadLabel.innerHTML = "Unread"
    unreadContainer.append(unreadLabel)

    unreadCheckbox = document.createElement("input");
    unreadCheckbox.setAttribute("type", "radio")
    unreadCheckbox.setAttribute("id", "unread-box")
    unreadCheckbox.setAttribute("name", `checkbox${i}`)
    unreadContainer.append(unreadCheckbox)

    const dnfContainer = document.createElement("li");
    dnfContainer.setAttribute("class","checkbox-container flex-container");
    listItemStatus.append(dnfContainer);

    const dnfLabel = document.createElement("Label");
    dnfLabel.setAttribute("name", "dnf-box")
    dnfLabel.innerHTML = "DNF"
    dnfContainer.append(dnfLabel)

    dnfCheckbox = document.createElement("input");
    dnfCheckbox.setAttribute("type", "radio")
    dnfCheckbox.setAttribute("id", "dnf-box")
    dnfCheckbox.setAttribute("name", `checkbox${i}`)
    dnfContainer.append(dnfCheckbox)

    const readingContainer = document.createElement("li");
    readingContainer.setAttribute("class","checkbox-container flex-container");
    listItemStatus.append(readingContainer);

    const readingLabel = document.createElement("Label");
    readingLabel.setAttribute("name", "reading-box")
    readingLabel.innerHTML = "Reading"
    readingContainer.append(readingLabel)

    readingCheckbox = document.createElement("input");
    readingCheckbox.setAttribute("type", "radio")
    readingCheckbox.setAttribute("id", "reading-box")
    readingCheckbox.setAttribute("name", `checkbox${i}`)
    readingContainer.append(readingCheckbox)
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

    console.log(status)
    
    if (title === "" || author === "" || pages === "" || status === "") 
    {
        return
    }

    function selectRadioButton() {
        if (status === "Read") {
            readCheckbox.checked = true;
        } else if (status === "Unread") {
            unreadCheckbox.checked = true;
        } else if (status === "DNF") {
            dnfCheckbox.checked = true;
        } else if (status === "Reading") {
            readingCheckbox.checked = true;
        }
    }

    addBookToLibrary(title, author, pages, status);
    selectRadioButton();
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