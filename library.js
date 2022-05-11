//declare empty array for library
let myLibrary = [];


//Book Constructor
function Book(author, title, pages, read) {

    this.author = author
    this.title = title
    this.pages = pages
    this.read = read

}

//add new book to myLibrary array

function addBookToLibrary() {
  // do stuff here

}


//Listen for New Book Entry button click
const addBookButton = document.querySelector(".add-book-button");
addBookButton.addEventListener("click", displayForm);


//display the form
function displayForm(){
    document.getElementById("add-book-form").style.display = "";
}

let x = new Book("Ben", "Title", 39, true)

console.log(x.author)