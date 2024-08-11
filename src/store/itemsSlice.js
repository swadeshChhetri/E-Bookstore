import {createSlice} from "@reduxjs/toolkit";

const booksSlice = createSlice({
  name: 'books',
  initialState: [],
  reducers: {
    addInitialbooks: (state, action) => {  //property
      return action.payload;
     
    }
  }
});

export const booksActions = booksSlice.actions;

export default booksSlice;

