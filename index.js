import { DateTime } from 'luxon.js';
import BookList from './book.js';
import hideSectionsOnClick from './spa.js';

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

// Show current date and time
const getDateTime = () => {
  setTimeout(() => {
    const todayDate = DateTime.now().setLocale('en-US').toLocaleString(DateTime.DATE_FULL);
    const timeNow = DateTime.now()
      .toLocaleString({
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hourCycle: 'h12',
      }).toUpperCase();
    const dateTimeNow = `${todayDate} ${timeNow}`;
    const dateTime = document.getElementById('date-time');
    dateTime.innerHTML = dateTimeNow;
    getDateTime();
  }, 1000);
};

// Hide and show page section
hideSectionsOnClick();

bookList.loadBooks();
getDateTime();