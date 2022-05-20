//declare empty array for library
let myLibrary = [];


//Book Constructor
function Book(author, title, pages, read) {

    this.author = author
    this.title = title
    this.pages = pages
    this.read = read

}


//grab initial form data on page start
let bookTitle = document.getElementById('Title').value
let bookAuthor = document.getElementById('Author').value
let bookPages = document.getElementById('Pages').value
let bookRead = document.getElementById('Read').value


//add new book to myLibrary array
function addBookToLibrary() {
  // do stuff here
    let newBook = new Book(bookAuthor, bookTitle, bookPages, bookRead)
    myLibrary.push(newBook)
    console.log(myLibrary)
}


//Listen for New Book Entry button click
const addBookButton = document.querySelector(".add-book-button");
addBookButton.addEventListener("click", displayForm);

//close form button
const closeBookForm = document.querySelector(".close-form");
closeBookForm.addEventListener("click", closeForm)

//close form function
function closeForm(event){
    event.preventDefault(); 
    document.getElementById("add-book-form").style.display = "none";
}

//display the form
function displayForm(){
    document.getElementById("add-book-form").style.display = "";
}

// start event listener for adding input from form

const submitButton = document.querySelector(".submit-button");
submitButton.addEventListener("click", submitForm)

function submitForm(event){

    //grab updated form data
    bookTitle = document.getElementById('Title').value
    bookAuthor = document.getElementById('Author').value
    bookPages = document.getElementById('Pages').value
    bookRead = document.getElementById('Read').value

    //prevent form action
    event.preventDefault(); 

    addBookToLibrary()
}

addBookToLibrary()
addBookToLibrary()
addBookToLibrary()

function displayBooks(){
 myLibrary.forEach(function (item, index){
     console.log(item, index)
 })
}

displayBooks()
