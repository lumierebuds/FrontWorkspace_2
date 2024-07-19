import { Component } from "react";

// 클래스형 컴포넌트 
class LifeCycle extends Component{

    componentDidMount() { // 컴포넌트의 생성자가 실행되고, 렌더링되었을때 호출
        console.log("마운트 함수 호출");
        this.setState({ temp: true }); // state 값이 바뀌면 render 함수가 다시 호출된다. 
        
    }

    shouldComponentUpdate(props, state) { // 중간 단계의 함수
        console.log("shouldComponentUpdate 함수 호출");
        return state.temp;  
    }
    
    constructor(props) {
        super(props);
        this.state = {}; // state를 관리하기 위해 해당 문법이 반드시 필요
        console.log("생성자 함수 호출");
    }

    render() {
        console.log("render 함수 호출");
        return (
            <h2>[render] 함수 호출</h2>
        )
    }
}

export default LifeCycle

