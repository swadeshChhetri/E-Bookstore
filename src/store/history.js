import {createSlice} from "@reduxjs/toolkit";

const historySlice = createSlice({
  name: 'history',
  initialState: [],
  reducers: {
    addInitialhistory: (state, action) => {  //property
      return action.payload;
       
      
      
     
    }
  }
});

export const historyActions = historySlice.actions;

export default historySlice;

