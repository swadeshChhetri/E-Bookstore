import {createSlice} from "@reduxjs/toolkit";

const motivationSlice = createSlice({
  name: 'motivation',
  initialState: [],
  reducers: {
    addInitialmotivation: (state, action) => {  //property
      return action.payload;
     
    }
  }
});

export const motivationActions = motivationSlice.actions;

export default motivationSlice;

