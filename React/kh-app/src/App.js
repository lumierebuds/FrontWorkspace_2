import { useState } from 'react';
import './App.css';
import BoardDetail from './components/BoardDetail';
import BoardInsert from './components/BoardInsert';
import BoardList from "./components/BoardList"
import BoardUpdate from './components/BoardUpdate';

import data from "./data.js"

import { Route, Routes, Link } from 'react-router-dom';
import Outer from './components/Outer.js';


function App() {

  let [layout, setLayout] = useState(0);
  // 0 : list (맨처음 들어올 항목)
  // 1 : insert
  // 2 : detail

  
  let [boardList, setBoardList] = useState(data);
  let [boardDetail, setBoardDetail] = useState({}); // 빈 객체로 초기화 

  let props = {
    boardList,
    setBoardList,
    boardDetail,
    setBoardDetail
  }; // props 라는 객체로 필요한 데이터를 관리함. 이 데이터들을 컴포넌트들에게 전달하도록 한다. 


  return (
    <div className="App">
      <div className="header">
        <h3 style={{fontWeight: 'bolder'}}>KH C CLASS</h3>
      </div>
      <div className="nav">
        <Link to="/list">일반 게시판</Link>
        <Link to="/insert">게시글등록</Link>
      </div>
      
      {
        <Routes>
          {/* <Route path='/board'></Route> */}
          {/* 전개연산자를 통해 props 객체의 값을 전달해준다. ex) boardList = {boardList}, setBoardList= {setBoardList} ... */}
          <Route path='/' element={<BoardList  {...props} />} /> 
          <Route path='/' element={<Outer />}>
            <Route path='list' element={<BoardList  {...props} />} /> 
            <Route path='insert' element={<BoardInsert  {...props}/>} />
            <Route path='detail/:boardNo' element={<BoardDetail  {...props} />} /> 
            {/* :boardNo : JSP의 PathVariable와 같은 역할을 하는 코드 */}
            <Route path='update' element={<BoardUpdate {...props} />} />
          </Route>
  
          
          <Route path='*' element={
            <div>
              <h1 style={{color:"red"}}>존재하지 않는 페이지 입니다.</h1>
              <Link to="/">메인으로</Link>
            </div>
          }/>


        </Routes>
      }
    </div>
  );
}

export default App;
