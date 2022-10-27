import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

const store = configureStore({
    reducer:{
      userReducer,   
    }
})

export default store;
export type RootStore = ReturnType<typeof store.getState>
export type RootDispatch = typeof store.dispatch