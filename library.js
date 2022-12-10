let myLibrary = [];
let bookName
let author
let pages


function getFormValues(){

     bookName = document.getElementById('name').value
     author = document.getElementById('author').value
     pages = document.getElementById('pages').value

}

function Book(name, author, pages) {
  // the constructor...
  this.name = name
  this.author = author
  this.pages = pages
}

function addBookToLibrary(title, author, pages) {
  // do stuff here

  let bookDiv = document.createElement('div')
  bookDiv.classList.add('book')
  let bookTitle = document.createElement('div')
  bookTitle.classList.add('book-title')
  let bookAuthor = document.createElement('div')
  bookAuthor.classList.add('book-author')
  let bookPages = document.createElement('div')
  bookPages.classList.add('book-pages')

  bookTitle.textContent = title
  bookAuthor.textContent = author
  bookPages.textContent = pages

  bookDiv.append(bookTitle)
  bookDiv.append(bookAuthor)
  bookDiv.append(bookPages)

  let libraryContainer = document.querySelector('.library-container')
  libraryContainer.append(bookDiv)

}

function refreshGrid(){
  
}

let form = document.querySelector('.submit-form');

function showForm() {
  form.classList.add('show');
}



let submit = document.getElementById('submit')

submit.addEventListener("click", (event)=>{

  event.preventDefault()
  getFormValues()
  addBookToLibrary(bookName, author, pages)
  form.classList.remove('show');
   
})

//form close button "x"

let closeButton = document.querySelector('.close-button');

closeButton.addEventListener('click', function() {
  form.classList.remove('show');

});



addBookToLibrary("it", "worked", "brosephina")



console.log(myLibrary)