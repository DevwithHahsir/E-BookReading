import { configureStore } from '@reduxjs/toolkit'
import booksReducer from '../redux/BookSlice' // Adjust the path as needed

export const store = configureStore({
  reducer: {
    books: booksReducer, // Add your reducer here
  },
})
