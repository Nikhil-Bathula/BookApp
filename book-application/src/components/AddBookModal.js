import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../actions/bookActions';
import '../styles/Popup.css';

const AddBookModal = ({ closeModal }) => {
  const dispatch = useDispatch();
  const [newBook, setNewBook] = useState({ name: '', price: '', category: '', description: '' });

  const handleAddBook = () => {
    dispatch(addBook(newBook));
    closeModal();
  };

  const handleInputChange = (e) => {
    setNewBook({ ...newBook, [e.target.name]: e.target.value });
  };

  const handleClosePopUp = () => {
    closeModal();
  }

  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Add Book</h2>
        <label>Name:</label>
        <input type="text" name="name" onChange={handleInputChange} />
        <label>Price:</label>
        <input type="text" name="price" onChange={handleInputChange} />
        <label>Category:</label>
        <input type="text" name="category" onChange={handleInputChange} />
        <label>Description:</label>
        <input type="text" name="description" onChange={handleInputChange} />
        <button onClick={handleAddBook}>Add Book</button>
        <button onClick={handleClosePopUp}>Close Popup</button>
      </div>
    </div>
  );
};

export default AddBookModal;
