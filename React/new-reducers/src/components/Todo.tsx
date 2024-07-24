import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { insert } from "../features/todoSlice";
import { ChangeEvent, useState } from "react";


function Todo() {

    const state = useSelector((state: RootState) => state.todo);

    const dispatch = useDispatch();

    const [text, setText] = useState('');

    const inputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }

    return (
        <div>
            <h2>Todo List</h2>
            <input type="text" name="thing" onInput={inputChange} />
            <button onClick={() => {
                dispatch(insert(text))
            }}>등록</button>
            <p>{state.thing}</p>
        </div>
    )
}

export default Todo;