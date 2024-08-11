import {configureStore} from "@reduxjs/toolkit";
import booksSlice from "./itemsSlice";
import fetchStatusSlice from "./fetchStatusSlice";
import bagSlice from "./bagSlice";
import historySlice from "./history";
import poetrySlice from "./poetrySlice";
import psychologySlice from "./psychologySlice";
import artsSlice from "./artsSlice";
import storiesSlice from "./storiesSlice";
import motivationSlice from "./motivation";

const myntraStore = configureStore({
  reducer: {
    books: booksSlice.reducer,
    fetchStatus: fetchStatusSlice.reducer,
    bag: bagSlice.reducer,
    history: historySlice.reducer,
    poetry : poetrySlice.reducer,
    psychology: psychologySlice.reducer,
    arts : artsSlice.reducer,
    stories: storiesSlice.reducer,
    motivation: motivationSlice.reducer,
    
  }
});


export default myntraStore;

