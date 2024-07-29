import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialTodoList, todo } from "../type/type";


const todoSlice = createSlice({
    name: "todo",
    initialState: initialTodoList, 
    reducers: {
        insert: (state, action:PayloadAction<string>)=> {
            
            let newTodo:todo = {
                id: state.length + 1, 
                task : action.payload
            }
            
            return [...state, newTodo]; 
        },
        deleteTodo: (state) =>  { 
            
        }
    }
    
})

export const { insert, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;