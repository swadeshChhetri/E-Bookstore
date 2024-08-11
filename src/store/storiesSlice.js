import {createSlice} from "@reduxjs/toolkit";

const storiesSlice = createSlice({
  name: 'stories',
  initialState: [],
  reducers: {
    addInitialstories: (state, action) => {  //property
      return action.payload;
      
     
    }
  }
});

export const storiesActions = storiesSlice.actions;

export default storiesSlice;

