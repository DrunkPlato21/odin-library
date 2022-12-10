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

function addBookToLibrary() {
  // do stuff here

  getFormValues()
  let newBook = new Book(bookName, author, pages)  
  myLibrary.push(newBook)
  console.log(myLibrary)

}
let form = document.querySelector('.submit-form');

function showForm() {
  form.classList.add('show');
}

let submit = document.getElementById('submit')

submit.addEventListener("click", (event)=>{

  event.preventDefault()
  addBookToLibrary()
  form.classList.remove('show');
   
})

let closeButton = document.querySelector('.close-button');

closeButton.addEventListener('click', function() {
  let box = this.closest('.box');
  box.parentNode.removeChild(box);
});




console.log(myLibrary)