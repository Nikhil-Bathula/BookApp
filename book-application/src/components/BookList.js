
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { openBookDetails, deleteBook } from '../actions/bookActions';
import AddBookModal from './AddBookModal';
import BookDetailsModal from './BookDetailsModal';
import '../styles/BookList.css';

const BookList = () => {
  const dispatch = useDispatch();
  const [isAddingBook, setIsAddingBook] = useState(false);
  const [enableBookDetails, setOpenBookDetails] = useState(false);
  const books = useSelector((state) => state.books);
  const [newBook, setNewBook] = useState({
    name: '',
    price: 0,
    category: '',
    description: '',
  });

  const handleAddBookClick = () => {
    setIsAddingBook(true);
  };

  const handleSaveBook = () => {

    // Reset the newBook state
    setNewBook({
      name: '',
      price: 0,
      category: '',
      description: '',
    });

    // Close the modal
    setIsAddingBook(false);
  };

  const handleCancelAddBook = () => {
    // Reset the newBook state
    setNewBook({
      name: '',
      price: 0,
      category: '',
      description: '',
    });

    // Close the modal
    setIsAddingBook(false);
  };

  const handleBookClick = (book) => {
    setOpenBookDetails(true);
    dispatch(openBookDetails(book));
  };

  const handleDeleteClick = (bookId) => {
    dispatch(deleteBook(bookId));
  };

  const closeDetailsModal = () => {
    setOpenBookDetails(false);
  }

  return (
    <div>
      <button onClick={handleAddBookClick}>Add a Book</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td onClick={() => handleBookClick(book)} style={{ color: "Highlight" }}>{book.name}</td>
              <td>${book.price}</td>
              <td>{book.category}</td>
              <td>{book.description}</td>
              <td>
                <button onClick={() => handleDeleteClick(book.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isAddingBook ? <AddBookModal closeModal={handleCancelAddBook} /> : null}
      {enableBookDetails ? <BookDetailsModal closeModal={closeDetailsModal} /> : null}
    </div>
  );
};

export default BookList;
