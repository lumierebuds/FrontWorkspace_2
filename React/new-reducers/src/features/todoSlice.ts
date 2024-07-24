import { PayloadAction, createSlice } from "@reduxjs/toolkit";


type todo = {
    thing: string
}


const init: todo = { thing: '' };


const todoSlice = createSlice({
    name: "todo", // 리듀서 이름 
    initialState: init,
    reducers: {
        insert: (state, action: PayloadAction<string>) => {
            return { ...state, thing: action.payload };
        },
        deleteTo: (state) => {
            return { ...state, thing: '' };
        }
    }
})


export const { insert, deleteTo } = todoSlice.actions;

export default todoSlice.reducer;