
import { configureStore} from "@reduxjs/toolkit";
import counterSlice from '../features/createSlice';

let store = configureStore({
    reducer: {
        counter: counterSlice,
    
        // member : memberSlice
        // board : boardSlice
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>