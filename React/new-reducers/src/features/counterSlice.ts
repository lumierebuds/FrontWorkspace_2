
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Counter = {
    value: number;
}

const init: Counter = { value: 0 };

const counterSlice = createSlice({
    name: 'counter', // 리듀서이름
    initialState: init,
    reducers: {
        increment: (state) => {
            return { ...state, value: state.value + 1 } // 새로 객체를 만들어서 반환시킴
        },
        decrement: (state) => {
            return { ...state, value: state.value - 1 }
        },
        increByAmount: (state, action: PayloadAction<number>) => { // 값을 넣어서 추가하도록 하기
            return { ...state, value: state.value + action.payload };
        }
    }
})


export const { increment, decrement, increByAmount } = counterSlice.actions; // destructuring 문법으로 인해 increment, decrement 반환

export default counterSlice.reducer; // 'counter' 반환 