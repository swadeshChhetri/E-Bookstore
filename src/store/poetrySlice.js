import {createSlice} from "@reduxjs/toolkit";

const poetrySlice = createSlice({
  name: 'poetry',
  initialState: [],
  reducers: {
    addInitialpoetry: (state, action) => {  //property
      return action.payload;
     
     
    }
  }
});

export const poetryActions = poetrySlice.actions;

export default poetrySlice;

