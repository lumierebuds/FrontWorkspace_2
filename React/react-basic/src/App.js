import logo from './logo.svg';
import './App.css';
import ListItems from './components/ListItems.js'
import {useState} from 'react'
import LifeCycle from './01_LifeCycle.js';

function App() {

  let b = 1; 

  function changeName() {

    setClassname('KH A CLASS');

    // classname = 'KH A CLASS';
    // console.log(classname);
    // document.querySelector("h1").innerText = classname;  
  }
  
  //let classname = 'KH C CLASS';
  let [classname, setClassname] = useState('KH C CLASS')
  
  let array = ['게시글 제목1', '게시글 제목2', '게시글 제목3'];

  return (
    <div className="App" style={{color : 'white' , backgroundColor: 'black'}}>
      <br/>
      <h1>{classname}</h1>
      <ul>
        <ListItems array={array}></ListItems> 
      </ul>
      <button onClick={changeName}>버튼</button>

      <LifeCycle></LifeCycle>
    </div>
    // 이 모든것이 jsx 문법에 해당한다. 
  );
}

export default App;
