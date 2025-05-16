import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loader: true,
  books: [],
  error: null,
};

export const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setBooks: (state, action) => {
      state.books = action.payload;
      state.loader = false;
      state.error = null;
    },
    setLoading: (state) => {
      state.loader = true;
      state.error = null;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loader = false;
    },
  },
});

export const { setBooks, setLoading, setError } = bookSlice.actions;

export default bookSlice.reducer;
