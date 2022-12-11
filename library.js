let myLibrary = [];
let bookName
let author
let pages
let counter
let isRead

let elements = document.querySelectorAll('.del')

function getFormValues(){

     bookName = document.getElementById('name').value
     author = document.getElementById('author').value
     pages = document.getElementById('pages').value
     isRead = document.getElementById('read-toggle').checked

}

function Book(name, author, pages, isRead, index) {
  this.name = name,
  this.author = author,
  this.pages = pages,
  this.index = index,
  this.isRead = isRead
}

// Add a prototype method to the Book constructor

Book.prototype.toggleReadStatus = function() {
  this.isRead = !this.isRead;
  
}



function addBookToLibrary(title, author, pages, isRead, index) {

  
//grab values from form
  
let bookDiv = document.createElement('div')
let bookTitle = document.createElement('div')
let bookAuthor = document.createElement('div')
let bookPages = document.createElement('div')

        bookDiv.classList.add('book')
        bookTitle.classList.add('book-title')
        bookAuthor.classList.add('book-author')
        bookPages.classList.add('book-pages')

        //create book object and add it to array

        let newBook = new Book(title, author, pages, isRead, myLibrary.length)
        myLibrary.push(newBook)
        // console.log(myLibrary)

        refreshGrid()

}

function refreshGrid(){
  counter = 0

  // empty grid
  const libraryContainer = document.querySelector('.library-container')
  libraryContainer.innerHTML = ""


  for (let i = 0; i < myLibrary.length; i++){
    
    let bookDiv = document.createElement('div')
    let bookTitle = document.createElement('div')
    let bookAuthor = document.createElement('div')
    let bookPages = document.createElement('div')
    
    //create delete button
    let delDiv = document.createElement('div')
    delDiv.classList.add("book-buttons")
    let delButton = document.createElement('div')
    delButton.classList.add('del')
    delButton.setAttribute('index', i)
    

    delButton.addEventListener('click', function(e){

      let delIndex = delButton.getAttribute('index')
      myLibrary.splice(delIndex, 1)
      refreshGrid()

    } )

    // create toggle switch

const readToggle = document.createElement('input');
readToggle.setAttribute('type', 'checkbox');
readToggle.setAttribute('class', 'read-toggle');
readToggle.setAttribute('index', i)

if(myLibrary[i]["isRead"] === true){
  readToggle.checked = true
} else{
  readToggle.checked = false
}



readToggle.addEventListener('click', function(e){

  let readIndex = readToggle.getAttribute('index')
  myLibrary[readIndex].toggleReadStatus()
  console.log(myLibrary[readIndex].isRead)
  saveBooks()

})

delDiv.append(readToggle)
delDiv.append(delButton)


    bookDiv.classList.add('book')
    bookTitle.classList.add('book-title')
    bookAuthor.classList.add('book-author')
    bookPages.classList.add('book-pages')

    bookTitle.textContent = myLibrary[i]['name']
    bookAuthor.textContent = myLibrary[i]['author']
    bookPages.textContent = myLibrary[i]['pages'] + " pages"

    bookDiv.append(bookTitle)
    bookDiv.append(bookAuthor)
    bookDiv.append(bookPages)
    bookDiv.append(delDiv)

    
    libraryContainer.append(bookDiv)
    console.log()

    
    counter++

  }
  elements = document.querySelectorAll('.del')
  saveBooks()
}

let form = document.querySelector('.submit-form');

function showForm() {
  form.classList.add('show');
}



///BUTTONS *************************************


let submit = document.getElementById('submit')

submit.addEventListener("click", (event)=>{

  

  event.preventDefault()
  getFormValues()
  if (bookName == "" || bookName == null || author == "" || author == null || pages == "" || pages == null) {
    alert("You can't leave any text boxes blank")
    return
  }
  

  addBookToLibrary(bookName, author, pages, isRead)
  form.classList.remove('show');
   
})

//form close button "x"

let closeButton = document.querySelector('.close-button');

  closeButton.addEventListener('click', function() {
    form.classList.remove('show');

});

function saveBooks(){
  localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
}

function loadBooks(){
 
    myLibrary = JSON.parse(localStorage.getItem("myLibrary"));
    console.log(myLibrary)

    if (myLibrary == [] || myLibrary == "" || myLibrary == null){

      return

    } else{

      for (let i = 0; i < myLibrary.length ; i++){
        myLibrary[i].toggleReadStatus = function() {
          this.isRead = !this.isRead;
          
        }
      }

    }

    refreshGrid()
    console.log(myLibrary)

}

 loadBooks()




addBookToLibrary("Lord of the Rings", "J.R.R Tolkien", "1200", true)
// addBookToLibrary("Game of Thrones", "GRRM", "1200", false)
// addBookToLibrary("The Bible", "God", "2000", false)


// console.log(myLibrary)