const books = {}; /* Terdapat semicolon `;` di setiap akhir statement. */

function getBooks() {
  return books; /* Indentasi sebesar **2 spasi**. */
}

function getBookById(id) {
  const book = books[id]; /* Terdapat semicolon `;` di setiap akhir statement. */ /* Indentasi sebesar **2 spasi**. */
  if (!book) { /* Indentasi sebesar **2 spasi**. */
    return null; /* Indentasi sebesar **2 spasi**. */
  } /* Indentasi sebesar **2 spasi**. */
  return book.id; /* Terdapat semicolon `;` di setiap akhir statement. */ /* Indentasi sebesar **2 spasi**. */
}

function saveBook(book) {
  books[book.id] = book; /* Terdapat semicolon `;` di setiap akhir statement. */ /* Indentasi sebesar **2 spasi**. */
}

saveBook({ id: 'book-1', name: 'Book 1' }); /* Selalu tambahkan spasi di antara tanda `{ }` dan nama properti yang didefinsikan dalam satu baris. */
const myBooks = getBooks(); /* Terdapat semicolon `;` di setiap akhir statement. */
const myBook = getBookById('book-1');

console.log(myBooks);
console.log(myBook);
