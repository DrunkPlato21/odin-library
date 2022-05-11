//declare empty array for library
let myLibrary = [];


//Book Constructor
function Book(author, title, pages, read) {

    this.author = author
    this.title = title
    this.pages = pages
    this.read = read
    this.info = function(){
        return (title + author + ", " + pages)
    }

}

//add new book to myLibrary array

function addBookToLibrary() {
  // do stuff here

}

let x = new Book("Ben", "Title", 39, true)

console.log(x.author)