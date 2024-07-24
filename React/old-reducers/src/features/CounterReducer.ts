
// state 초기값 설정
const initialState = { count: 0 };

// reduceer 함수정의

// 1) state 타입지정

type Counter = {
    count: number
}

// 2) action 타입 지정 
type CounterAction = {
    type: string,
    payload : any
}


function reducer(state = initialState, action : CounterAction) {
    switch (action.type) {
        case 'increase':
            return { count: state.count + 1 };
        case 'decrease':
            return { count: state.count - 1 };
        default:
            return state;
    }
}

export default reducer;
