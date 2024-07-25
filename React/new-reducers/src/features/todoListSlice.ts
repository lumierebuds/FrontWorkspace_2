import { PayloadAction, createSlice } from "@reduxjs/toolkit";


type TodoItem = {
    id: number; 
    text: string;
    isDone: boolean;
}

const init: {todos : TodoItem[], id:number} = { todos: [], id:0 }; 


const todoSlice = createSlice({
    name: "todoList", // 리듀서 이름 
    initialState: init,
    reducers: {
        addTodos: (state, action:PayloadAction<string>) => { // 추가
            
            let newId = state.id + 1;
            
            let newTodo = {
                id: newId,
                isDone: false,
                text: action.payload
            }

            return { ...state, todos: [...state.todos, newTodo], id: newId };
            // 리듀서의 반환해야 하는 값은 무조건 새로운값
            // todos 배열 : 기존 todos 배열의 내용을 전개, 만들어진 newTodo 추가 
            // id : 기존 id값에 1 더해서 해당 id 추가 
        }, 
        deleteTodos: (state, action:PayloadAction<number>) => { // 삭제
            
            let id = action.payload;

            let filteredList = state.todos.filter((value) => value.id != id);

            return { ...state, todos: filteredList}; 
            
        }, 
        checkTodos: (state, action:PayloadAction<number>) => { // 완료
            
            let id = action.payload; 
            
            let mappedList = state.todos.map((value) => {
                if (value.id == id) {
                    let newTodo = {
                        ...value,
                        isDone: !value.isDone
                    }; // 기존 객체의 값과, isDone 값을 변경해서 완료된것으로 처리 
                    return newTodo;
                }
                return value; 
            })

            return { ...state, todos: mappedList }; // 깊은 복사를 한 값을 반환해주는게 권장하는 방법 
        }
    }
})

export const {addTodos, deleteTodos, checkTodos } = todoSlice.actions;

export default todoSlice.reducer;