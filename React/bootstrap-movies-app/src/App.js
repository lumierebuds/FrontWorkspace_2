import './App.css';
import List from './components/List'
import Insert from './components/Insert';
import {useState} from "react"
import data from './data';


function App() {

  let [layout, setLayout] = useState(0); 
  // 0 : 게시글 목록 
  // 1 : 게시글 작성 
  
  let [list, setList] = useState(data);

  const onDelete = (bno) => {
    setList(list.filter((value) => value.bno !== bno));
  }

  
  return (
    <div className="App">
      <div className="header">
        <h3 style={{fontWeight: 'bolder'}}>KH C CLASS</h3>
      </div>
      <div className="nav">
        <button onClick={() => { 
          setLayout(0);
        }}>일반게시판</button>
        <button onClick={() => {
          setLayout(1);
        }}>게시글등록</button>
      </div>
      {
        layout === 0 ? <List props={{ list, onDelete }}/> :
          layout === 1 ? <Insert props={ {list}} /> : null
      }
    </div>
  );
}

export default App;
