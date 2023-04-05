class BookList {
  constructor(
    bookListElement,
    addBookFormElement,
    titleInputElement,
    authorInput,
  ) {
    this.bookListElement = bookListElement;
    this.addBookFormElement = addBookFormElement;
    this.titleInputElement = titleInputElement;
    this.authorInput = authorInput;
    this.books = [];
    this.loadBooks();
    this.updateBookList();
    this.addBookFormElement.addEventListener('submit', this.add.bind(this));
  }

  loadBooks() {
    const storedBooks = JSON.parse(localStorage.getItem('books'));
    if (storedBooks) {
      this.books = storedBooks.map((book) => ({
        title: book.title,
        author: book.author,
      }));
    }
  }

  add(event) {
    event.preventDefault();
    const title = this.titleInputElement.value;
    const author = this.authorInput.value;
    const book = { title, author };
    this.books.push(book);
    this.titleInputElement.value = '';
    this.authorInput.value = '';
    this.updateBookList();
  }

  removeBook(index) {
    this.books = this.books.filter((book, i) => !(i === parseInt(index, 10)));
    this.updateBookList();
  }

  updateBookList() {
    this.bookListElement.innerHTML = '';
    this.books.forEach((book, index) => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `<strong>${book.title}</strong> by ${book.author}`;
      const removeButton = document.createElement('button');
      removeButton.classList.add('remove-button');
      removeButton.id = `${index}`;
      removeButton.textContent = 'Remove';
      removeButton.addEventListener('click', () => {
        this.removeBook(index);
      });
      const breakline = document.createElement('hr');
      listItem.appendChild(removeButton);
      listItem.appendChild(breakline);
      this.bookListElement.appendChild(listItem);
    });
    localStorage.setItem('books', JSON.stringify(this.books));
  }
}

// const allRemoveBtn = document.querySelectorAll('.remove-button');
// console.log(allRemoveBtn);

export default BookList;
