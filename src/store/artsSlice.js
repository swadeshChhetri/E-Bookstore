import {createSlice} from "@reduxjs/toolkit";

const artsSlice = createSlice({
  name: 'arts',
  initialState: [],
  reducers: {
    addInitialarts: (state, action) => {  //property
      return action.payload;
     
    }
  }
});

export const artsActions = artsSlice.actions;

export default artsSlice;

