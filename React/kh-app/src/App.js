import { useState } from 'react';
import './App.css';
import BoardDetail from './components/BoardDetail';
import BoardInsert from './components/BoardInsert';
import BoardList from "./components/BoardList"
import data from "./data.js"

function App() {

  let [layout, setLayout] = useState(0);
  // 0 : list (맨처음 들어올 항목)
  // 1 : insert
  // 2 : detail

  const showDetail = () => {
    setLayout(2);
  }
  
  return (
    <div className="App">
      <div className="header">
        <h3 style={{fontWeight: 'bolder'}}>KH C CLASS</h3>
      </div>
      <div className="nav">
        <button>일반게시판</button>
        <button>게시글등록</button>
      </div>
      
      {
        layout === 0 ? <BoardList boardList={data} /> : 
        layout === 1 ? <BoardInsert/> : <BoardDetail/>
      }
    </div>
  );
}

export default App;
