let myLibrary = [];

myLibrary = [
  new Book('Jurassic Park', 'Michael Crichton'),
  new Book('Jane Eyre', 'Charlotte Bronte')
];

const addNewBookForm = document.querySelector('#add-book-form');
const addNewBookButton = document.querySelector('#add-new-book');
const cancelAddingNewBookButton = document.querySelector(
  '#cancel-adding-new-book'
);
const addBookButton = document.querySelector('#add-book');

addNewBookButton.addEventListener('click', () => {
  addNewBookForm.style = 'visibility:visible';
  cancelAddingNewBookButton.style = 'visibility:visible';
  addNewBookButton.style = 'visibility:hidden';
});

cancelAddingNewBookButton.addEventListener('click', e => {
  e.preventDefault();
  addNewBookForm.style = 'visibility:hidden';
  cancelAddingNewBookButton.style = 'visibility:hidden';
  addNewBookButton.style = 'visibility:visible';
});

addBookButton.addEventListener('click', e => {
  e.preventDefault();
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  if (title !== '' && author !== '') {
    addBookToLibrary(new Book(title, author));
    showBooksOnPage();
  }
  // console.log(document.querySelector('#title'));
  // const title = document.querySelector('#title').innerText;
});

function Book(title, author) {
  // the constructor...
  this.title = title;
  this.author = author;
}

function addBookToLibrary(book) {
  // do stuff here
  myLibrary.push(book);
}

function showBooksOnPage() {
  const allBooks = document.querySelector('#all-books');
  if (allBooks.hasChildNodes()) {
    while (allBooks.firstChild) {
      allBooks.removeChild(allBooks.firstChild);
    }
  }

  myLibrary.forEach(book => {
    const p = document.createElement('p');
    p.innerHTML = `<p><em>${book.title}</em> by ${book.author}</p>`;
    allBooks.appendChild(p);
  });
}

function init() {
  showBooksOnPage();
  addNewBookButton.click();
}

// window.onload = function () {
init();
// };
