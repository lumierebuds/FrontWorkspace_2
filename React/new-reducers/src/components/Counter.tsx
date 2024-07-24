import { useDispatch, useSelector } from "react-redux"
import store, { RootState } from "../store/store"
import { decrement, increByAmount, increment } from "../features/counterSlice";



export default function Counter() {

    const state = useSelector((state: RootState) => state.counter);
    console.log(state);

    const dispatch = useDispatch();

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button onClick={() => { dispatch(decrement()) }}>-</button>
            </div>
            <div>{state.value}</div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button onClick={() => { dispatch(increByAmount(2)) }}>+</button>
            </div>
        </div>
    )

}