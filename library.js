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
    //console.log(myLibrary)
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

    addBookToLibrary();
    displayBooks();
}


const table = document.getElementById('book-table')

table.addEventListener('click', function(e){
    if (e.target.classList.contains('del')){
        alert(e.target.innerHTML)
        deleteRow(e)
    }
})

function displayBooks(){

    
    const row = document.createElement('tr');

//loop through each item in array
    myLibrary.forEach(function (item, index){
        //console.log(item, index)


      
        let author = myLibrary[index].author
        let title = myLibrary[index].title
        let pages = myLibrary[index].pages
        let read = myLibrary[index].read
        
        row.innerHTML = `<td>${author}</td><td>${title}</td><td>${pages}</td><td>${read}</td><td><button class="del">X</button></td>`
        table.appendChild(row)
        
       
        
        //bookRow.classList.add("book-item")
        
        console.log(author, title, pages, read)

       // console.log(myLibrary[index].title)




   })


}

function deleteRow(x){
    let td = x.target.parentNode;
    let tr = td.parentNode;
    tr.parentNode.removeChild(tr)
}


addBookToLibrary()
displayBooks()


