import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useState } from "react";
import { insert } from "../features/todoSlice";


function Todo() {

    const todoList = useSelector((state: RootState) => state.todoList);

    // todo 문자열 값을 저장할 상태변수 
    let [input, setInput] = useState('');

    // todoList 에 input 값을 추가할 수 있도록 dispatch 함수 사용  
    const dispatch = useDispatch();


    return (
        <>
            <h3>Todo List</h3>
            <input type="text" name="task" value={input} onChange={(e) => {
                setInput(e.target.value);
            }} />
            <button onClick={() => { dispatch(insert(input)) }}>Add</button>
            <ul>
            {
                todoList.map((value) => {
                    return (
                        <>
                            <li style={{ listStyle: "none" }}>
                                <span>{value.task}</span><span>❌</span>
                            </li>
                        </>
                    )
                })
            }
            </ul>
        </>
    )
}

export default Todo;