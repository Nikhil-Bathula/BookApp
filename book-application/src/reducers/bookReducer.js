const initialState = {
  books: [
    {
      "id": 1,
      "name": "The Great Gatsby",
      "price": 19.99,
      "category": "Fiction",
      "description": "A classic novel depicting the glamorous and tumultuous life of Jay Gatsby in the Roaring Twenties."
    },
    {
      "id": 2,
      "name": "To Kill a Mockingbird",
      "price": 15.50,
      "category": "Classics",
      "description": "Harper Lee's masterpiece exploring racial injustice and moral growth in the American South during the 1930s."
    },
    {
      "id": 3,
      "name": "Sapiens: A Brief History of Humankind",
      "price": 24.95,
      "category": "Non-Fiction",
      "description": "Yuval Noah Harari's compelling journey through the history of Homo sapiens, from ancient times to the present."
    },
    {
      "id": 4,
      "name": "The Hobbit",
      "price": 22.75,
      "category": "Fantasy",
      "description": "J.R.R. Tolkien's enchanting tale of Bilbo Baggins' epic adventure in Middle-earth."
    },
    {
      "id": 5,
      "name": "Educated",
      "price": 18.99,
      "category": "Memoir",
      "description": "Tara Westover's memoir detailing her journey from growing up in a strict household in rural Idaho to earning a PhD from Cambridge University."
    },
    {
      "id": 6,
      "name": "The Da Vinci Code",
      "price": 14.50,
      "category": "Mystery",
      "description": "Dan Brown's gripping mystery thriller that combines art, history, and religion in a quest for hidden secrets."
    },
    {
      "id": 7,
      "name": "1984",
      "price": 16.99,
      "category": "Dystopian",
      "description": "George Orwell's dystopian classic depicting a totalitarian society where individualism is suppressed, and the state controls every aspect of life."
    },
    {
      "id": 8,
      "name": "The Alchemist",
      "price": 20.25,
      "category": "Philosophical Fiction",
      "description": "Paulo Coelho's philosophical novel about a shepherd named Santiago on a journey to discover his personal legend."
    },
    {
      "id": 9,
      "name": "Astrophysics for Young People in a Hurry",
      "price": 12.75,
      "category": "Science",
      "description": "Neil deGrasse Tyson simplifies complex astrophysical concepts, making them accessible to young readers and curious minds."
    },
    {
      "id": 10,
      "name": "The Art of War",
      "price": 13.99,
      "category": "Strategy",
      "description": "Sun Tzu's timeless treatise on military strategy, offering insights into the nature of conflict and effective leadership."
    }
  ],
  openBookDetails: null,
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      console.log(action.payload, 'payload')
      return { ...state, books: [...state.books, { ...action.payload, id: state.books.length + 1 }] };
    case 'DELETE_BOOK':
      console.log(action.payload, 'payload')
      return { ...state, books: state.books.filter((book) => book.id !== action.payload) };
    case 'OPEN_BOOK_DETAILS':
      return { ...state, openBookDetails: action.payload };
    case 'UPDATE_BOOK':
      return {
        ...state,
        books: state.books.map((book) => (book.id === action.payload.id ? action.payload : book)),
        openBookDetails: action.payload,
      };
    default:
      return state;
  }
};

export default bookReducer;
