const bookData = JSON.parse(localStorage.getItem('bookData')) || [];
const title = document.getElementById('title');
const author = document.getElementById('author');
const addBook = document.getElementById('add-book');
const allBooks = document.getElementById('books');
let allRemoveBtn;

// Get all stored data and display on browser
function loadBooks() {
  while (allBooks.hasChildNodes()) {
    allBooks.removeChild(allBooks.firstChild);
  }

  for (let i = 0; i < bookData.length; i += 1) {
    const bookHTMLTemplate = `
          <p>${bookData[i].title}</p>
          <p>${bookData[i].author}</p>
          <button class="remove" type="button" name=${i}>Remove</button>
          <hr>`;
    const eachBooks = document.createElement('div');
    eachBooks.innerHTML = bookHTMLTemplate;
    allBooks.appendChild(eachBooks);
  }

  // getAllRemoveBtn();
  allRemoveBtn = document.querySelectorAll('.remove');
  allRemoveBtn.forEach((removeBtn) => {
    removeBtn.addEventListener('click', () => {
      bookData.forEach((book, index) => {
        if (index === parseInt(removeBtn.name, 10)) {
          bookData.splice(index, 1);
          localStorage.setItem('bookData', JSON.stringify(bookData));
          loadBooks();
        }
      });
    });
  });
}

// Add a book to the bookData array
addBook.addEventListener('click', (event) => {
  event.preventDefault();
  if (author.value && title.value) {
    const newBook = {
      author: '',
      title: '',
    };
    newBook.author = author.value;
    newBook.title = title.value;
    bookData.push(newBook);
    localStorage.setItem('bookData', JSON.stringify(bookData));
    author.value = '';
    title.value = '';
    loadBooks();
  }
});

//  Fetch data loading browser
window.addEventListener('load', () => {
  loadBooks();
});
