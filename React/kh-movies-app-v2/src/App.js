import './App.css';
import List from './components/List'
import Insert from './components/Insert';
import Detail from './components/Detail';
import {useState} from "react"
import data from './data';
import { Routes, Route, Link } from 'react-router-dom';
import Outer from './Outer';
import Update from './components/Update';


function App() {

  
  let [list, setList] = useState(data);

  let [boardDetail, setBoardDetail] = useState({}); 

  const onDelete = (id) => {
    setList(list.filter((value) => value.id !== id));
  }

  
  return (
    <div className="App">
      <div className='header'>
        <h3 style={{fontWeight: 'bolder'}}>KH C CLASS</h3>
      </div>
      <div className="nav">
        <Link to="/list">일반게시판</Link>
        <Link to="/insert">게시글등록</Link>
      </div>
      {/* 
        <List list={list} onDelete={onDelete}></List>
        <Insert list={list} setList={setList}></Insert> */}
      {
        <Routes>
          <Route path='/' element={<List list={list} onDelete={onDelete} setBoardDetail={setBoardDetail} />}/>
          <Route path='/' element={<Outer />}>
            <Route path="list" element={<List list={list} onDelete={onDelete} setBoardDetail={setBoardDetail}/>}/>
            <Route path="insert" element={<Insert list={list} setList={setList}/>} />
            <Route path="detail/:id" element={<Detail list={list}/>} />
            <Route path="update/:id" element={<Update list={list} setList={setList} setBoardDetail={setBoardDetail} />}/>
          </Route>
        </Routes>
      }

    </div>
  );
}

export default App;
