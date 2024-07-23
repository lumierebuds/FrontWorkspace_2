import { useState } from "react";

// 훅 함수 : 컴포넌트 내부에서 사용할 수 있는 함수들
// 컴포넌트에서 순서에 맞춰서 반환한다. 

function useInput(init) { 
    let [obj, setObj] = useState(init);

    let onInputChange = (e) => {
        let { name, value } = e.target;
        setObj({
            ...obj, 
            [name] : value
        })
    }

    return [obj, setObj, onInputChange];  // 반환되는 함수가 없어서 오류가 발생했다. (return문이 onInputChange에 있었음)
}

export default useInput;