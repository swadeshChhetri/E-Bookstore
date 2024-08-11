import {createSlice} from "@reduxjs/toolkit";

const psychologySlice = createSlice({
  name: 'psychology',
  initialState: [],
  reducers: {
    addInitialpsychology: (state, action) => {  //property
      return action.payload;
     
     
    }
  }
});

export const psychologyActions = psychologySlice.actions;

export default psychologySlice;

