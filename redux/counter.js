import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   followers: 124,
};

export const followSlice = createSlice({
   name: "follow",
   initialState,
   reducers: {
      // Redux helps manage applications state chanes in a single store so that
      //they behave consistently.
      increseFollow: (state) => {
         state.followers += 1;
      },
      decreseFollow: (state) => {
         state.followers -= 1;
      },
   },
});

// Exporting created actions to be used in the data layer
export const { increseFollow, decreseFollow } = followSlice.actions;


export default followSlice.reducer;
//Exporting selectors to call the actions from the data layer
export const selectfollowCounter = (state) => state.follow.followers;
