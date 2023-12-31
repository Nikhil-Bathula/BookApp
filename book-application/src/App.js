import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookList from './components/BookList';
import BookDetailsModal from './components/BookDetailsModal';

const App = () => {
  return (
    // <Router>
      <div>
        <h1>Bookstore App</h1>
        {/* <Routes>
          <Route path="/" exact component={BookList} />
        </Routes>
        <AddBookModal />
        <BookDetailsModal /> */}
        <BookList />
      </div>
    // </Router>
  );
};

export default App;
