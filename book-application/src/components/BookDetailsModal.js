import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateBook } from '../actions/bookActions';
import '../styles/Popup.css';

const BookDetailsModal = ({ closeModal }) => {
  const dispatch = useDispatch();
  const bookDetails = useSelector((state) => state.openBookDetails);
  const [updatedBook, setUpdatedBook] = useState({ ...bookDetails });

  const handleUpdateBook = () => {
    closeModal();
    dispatch(updateBook(updatedBook));
  };

  const handleInputChange = (e) => {
    setUpdatedBook({ ...updatedBook, [e.target.name]: e.target.value });
  };

  const handleClosePopUp = () => {
    closeModal();
  }

  return (
    <div>
      <div className="popup">
        <div className="popup-content">
          <h2>Book Details</h2>
          <label>Name:</label>
          <input type="text" name="name" value={updatedBook.name} onChange={handleInputChange} />
          <label>Price:</label>
          <input type="text" name="price" value={updatedBook.price} onChange={handleInputChange} />
          <label>Category:</label>
          <input type="text" name="category" value={updatedBook.category} onChange={handleInputChange} />
          <label>Description:</label>
          <input type="text" name="description" value={updatedBook.description} onChange={handleInputChange} />
          <button onClick={handleUpdateBook}>Update Book</button>
          <button  onClick={handleClosePopUp}>Close Popup</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsModal;
