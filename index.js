const bookData = JSON.parse(localStorage.getItem('bookData')) || [];
const title = document.getElementById('title');
const author = document.getElementById('author');
const addBook = document.getElementById('add-book');
const allBooks = document.getElementById('books');
let allRemoveBtn;

class AwesomeBook {
  constructor(bookData, title, author, addBook, allBooks, allRemoveBtn) {
    this.bookData = bookData;
    this.title = title;
    this.author = author;
    this.addBook = addBook;
    this.allBooks = allBooks;
    this.allRemoveBtn = allRemoveBtn;
  }

  // Remove book from localStorage
  remove() {
    this.allRemoveBtn = document.querySelectorAll('.remove');
    this.allRemoveBtn.forEach((removeBtn) => {
      removeBtn.addEventListener('click', () => {
        this.bookData.forEach((book, index) => {
          if (index === parseInt(removeBtn.id, 10)) {
            this.bookData.splice(index, 1);
            localStorage.setItem('bookData', JSON.stringify(this.bookData));
            this.loadBooks();
          }
        });
      });
    });
  }

  // Get all stored data and display on browser
  loadBooks() {
    while (this.allBooks.hasChildNodes()) {
      this.allBooks.removeChild(this.allBooks.firstChild);
    }

    for (let i = 0; i < this.bookData.length; i += 1) {
      const bookHTMLTemplate = `
        <p>${this.bookData[i].title}</p>
        <p>${this.bookData[i].author}</p>
        <button id="${i}" class="remove" type="button">Remove</button>
        <hr>`;
      const eachBooks = document.createElement('div');
      eachBooks.innerHTML = bookHTMLTemplate;
      this.allBooks.appendChild(eachBooks);
    }
    this.remove();
  }

  // Add a book to the bookData array
  add() {
    this.addBook.addEventListener('click', (event) => {
      event.preventDefault();
      if (this.author.value && this.title.value) {
        const newBook = {
          author: '',
          title: '',
        };
        newBook.author = author.value;
        newBook.title = title.value;
        this.bookData.push(newBook);
        localStorage.setItem('bookData', JSON.stringify(this.bookData));
        this.author.value = '';
        this.title.value = '';
        this.loadBooks();
      }
    });
  }
}

const book = new AwesomeBook(
  bookData,
  title,
  author,
  addBook,
  allBooks,
  allRemoveBtn,
);

book.add();
book.remove();

//  Fetch data loading browser
window.addEventListener('load', () => {
  book.loadBooks();
  book.remove();
});
