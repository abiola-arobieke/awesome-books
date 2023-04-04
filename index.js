import BookList from './book.js';
import hideSectionsOnClick from './spa.js';
import getDateTime from './dateTime.js';

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