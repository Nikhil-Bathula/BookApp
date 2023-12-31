export const addBook = (newBook) => ({
  type: 'ADD_BOOK',
  payload: newBook,
});

export const deleteBook = (bookId) => ({
  type: 'DELETE_BOOK',
  payload: bookId,
});

export const openBookDetails = (book) => ({
  type: 'OPEN_BOOK_DETAILS',
  payload: book,
});

export const updateBook = (updatedBook) => ({
  type: 'UPDATE_BOOK',
  payload: updatedBook,
});
