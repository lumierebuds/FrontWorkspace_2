import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { ChangeEvent, useState } from "react";
import { addTodos,checkTodos, deleteTodos } from "../features/todoListSlice";
import { Root } from "react-dom/client";

function Todo() {

    let [input, setInput] = useState('');

    const {todolist} = useSelector((state:RootState) => state);
    const dispatch = useDispatch();


    const textDeco = { textDecoration: 'line-through' }; // 취소선 스타일 

    return (
        <div>
            <h2>Todo List</h2>
            <input type="text" value={input} onChange={(e) => {
                setInput(e.target.value);
            }} />
            <button onClick={()=> {dispatch(addTodos(input))}}>add</button>
            <ul>
                {
                    todolist.todos.map((todoItem) => {
                        return (
                            <li key={todoItem.id} style={{ listStyle: "none" }}>
                                <span onClick={() => { dispatch(checkTodos(todoItem.id)) }} style={
                                    todoItem.isDone ? textDeco : {} 
                                }>{todoItem.text}</span>
                                <span onClick={()=> {dispatch(deleteTodos(todoItem.id))}}>❌</span>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Todo;