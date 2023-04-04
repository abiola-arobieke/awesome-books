import BookList from './modules/book.js';
import hideSectionsOnClick from './modules/spa.js';
import getDateTime from './modules/dateTime.js';

// global variables
const bookListElement = document.getElementById('book-list');
const addBookFormElement = document.getElementById('add-book-form');
const titleInputElement = document.getElementById('title-input');
const authorInput = document.getElementById('author-input');

// List, add, and remove book
const bookList = new BookList(
  bookListElement,
  addBookFormElement,
  titleInputElement,
  authorInput,
);

hideSectionsOnClick();
bookList.loadBooks();
getDateTime();
