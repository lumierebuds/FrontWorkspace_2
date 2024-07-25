
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from '../features/counterSlice';
import todoSlice from "../features/todoListSlice";

let store = configureStore({
    reducer: {
        counter: counterSlice,
        todolist: todoSlice
        // member : memberSlice
        // board : boardSlice
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>