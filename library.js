let myLibrary = [];

function getFormValues(){

    let bookName = document.getElementById('name').value
    let author = document.getElementById('author').value
    let pages = document.getElementById('pages').value

}

function Book(name, author, pages) {
  // the constructor...
  this.name = name
  this.author = author
  this.pages = pages
}

function addBookToLibrary(book) {
  // do stuff here

  myLibrary.push(book)

}

let dummy = new Book('blah', 'Clay', 50)
let dummy2 = new Book('blah', 'Clay', 50)

addBookToLibrary(dummy)
addBookToLibrary(dummy2)

let submit = document.getElementById('submit')

submit.addEventListener("click", ()=>{
    alert('ellpo')
})

console.log(myLibrary)