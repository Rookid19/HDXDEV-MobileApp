import { configureStore } from "@reduxjs/toolkit";

import followReducer from "./counter";

export const store = configureStore({
   reducer: {
      follow: followReducer,
   },
});
