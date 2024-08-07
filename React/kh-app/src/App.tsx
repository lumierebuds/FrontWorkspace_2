import { createContext, useEffect, useState } from 'react';
import './App.css';
import BoardDetail from './components/BoardDetail';
import BoardInsert from './components/BoardInsert';
import BoardList from "./components/BoardList";
import BoardUpdate from './components/BoardUpdate';
import Outer from './components/Outer';

import { Board, Props, SetBoardDetail,SetBoardList } from './type/boardType';

import axios from 'axios';


import { Route, Routes, Link } from 'react-router-dom';
import { DefaultRootState, useDispatch, useSelector } from 'react-redux';
import { RootState } from './store/store';
import { logout, randomProfile } from './features/userSlice';
import LoginModal from './components/LoginModal';


export let Context = createContext({}); // context == state 보관소 


function App() {


  // useEffect : 컴포넌트가 렌더링될 때를 감지하여 렌더링된 이후 실행할 코드를
  // 기술하는 함수. 컴포넌트에는 LifeCycle이라는 개념이 있는데, 컴포넌트가 처음 로딩되는 시기를 mount
  // state에 의해 컴포넌트가 변경된 내용으로 재랜더링 될때는 update,
  // 컴포넌트가 소멸할때는 unmount라고 부른다.
  
  // useEffect(() => {
  //   렌더링이 완료된 후 실행할 코드. (mount / update)
  //   reactdom에 이벤트 부여
  //   서버로 비동기 요청을 보내는 부분.
  //   return () => { } // 컴포넌트가 소멸할때 실행할 코드 (unmount)
  // }, []); // 의존성 목록. 의존성 목록에 담겨있는 데이터가 변경될때마다 함께 update문 실행


  
  let [boardList, setBoardList] = useState<Board[]>([]);
  
  /*
    axions
    .get/post('url경로', {전달할데이터})
    .then((result) => {
      // 요청 성공시 실행할 코드 
    })
    .catch((error) => {
       // 에러 발생시 실행할 코드 
    })

  */

  useEffect(() => {
    axios.get('/data/data.json', { data: 'ㅋㅋ' })
      .then((result) => {
        console.log(result.data);
        setBoardList(result.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, []); 
  
  
  let [boardDetail, setBoardDetail] = useState<Board>(boardList[0]); // 빈 객체로 초기화 

  let props: Props = {
    boardList,
    setBoardList,
    boardDetail,
    setBoardDetail
  }; // props 라는 객체로 필요한 데이터를 관리함. 이 데이터들을 컴포넌트들에게 전달하도록 한다. 


  let user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch(); 

  let [loginModalState, setLoginModalState] = useState(false);

  const loginModal = () => {
    setLoginModalState(!loginModalState);
  }

  return (
    <div className="App">
      <div className='header'>
        <div className="header-1">
          <h3 style={{fontWeight: 'bolder'}}>KH C CLASS</h3>
        </div>
        <div className="header-2">
          <img src={user.profile} onClick={() => { dispatch(randomProfile())}}></img>
          <div className="user-info">
            <span className='user-nickname'>{user.nickname}</span>
            <span className='user-email'>{user.email}</span>
            
          </div>
          {
            user.email ? 
              <button onClick={() => {dispatch(logout())}}>로그아웃</button>
              : 
              <button onClick={() => { loginModal() }}>로그인</button>
          }
        </div>
        
      </div>
      
      <div className="nav">
        <Link to="/list">일반 게시판</Link>
        <Link to="/insert">게시글등록</Link>
      </div>
      
      {
        <Context.Provider value={{...props}}>
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
          </Context.Provider>
        
      }
      { // 로그인 모달창 
        loginModalState &&
        <LoginModal setLoginModalState={setLoginModalState} />}
    </div>
  ); 
}

export default App;
