# odin-library

You can try it here: https://drunkplato21.github.io/odin-library/

A simple JavaScript/HTML/CSS library project where you can add and delete books, and save them to local storage.

I did this according to the rules of the Odin Project lesson: https://www.theodinproject.com/lessons/node-path-javascript-library

## **Features**

- Add new books to the library
- Delete books from the library
- Toggle whether or not you've read the book
- Save the library to local storage
- Load the library from local storage


## **Development and Lessons Learned**

The Book Library project was developed using HTML, CSS, and vanilla JavaScript. The local storage API was used to save and load the library.

I encountered many challenges creating this, but I have learned so much. 

The biggest challenge was towards the end, when I was adding localstorage. It turns out, object prototypes do not exist on objects loaded from memory. I had to redefine the prototype on load to solve this. I could have also used the object data from memory to reconstruct the objects.

I've gotten to use pretty much all of the skills and knowledge I've been accumulating in the Odin Project so far, and am looking forward to moving on to Factory Functions and the tic-tac-toe project. 
