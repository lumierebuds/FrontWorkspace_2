import { useState } from "react";

function Counter() {

    const [count, setCount] = useState(0);
    // 함수 4개로 
    // count 값을 +1, +10, -1, -10 시키는 기능 만들기 

    const plusOne = () => {
        setCount(count + 1); 
    }

    const plusTen = () => {
        setCount(count + 10);
    }

    const minusOne = () => {
        setCount(count - 1); 
    }
    
    const minusTen= () => {
        setCount(count - 10); 
    }

    return (
    <>
        <button onClick={minusTen}> -10 버튼</button>
        <button onClick={minusOne}> - 버튼</button>
        {count}
        <button onClick={plusOne}> + 버튼</button>
        <button onClick={plusTen}> +10 버튼</button>
    </>
    )
}

export default Counter;