import logo from './logo.svg';
import './App.css';
import Tables from './components/Tables.js'
import { useState } from 'react';

function App() {

  const [boardList, setBoards] = useState([
    {
      boardNo: 1,
      title: "Movie 1",
      genre: "Drama",
      date: "2022-01-01"
    },
    {
      boardNo: 2,
      title: "Movie 2",
      genre: "Action",
      date: "2022-02-01"
    },
    {
      boardNo: 3,
      title: "Movie 3",
      genre: "Comedy",
      date: "2022-03-01"
    }
  ])
  // 출처: https://react.vlpt.us/basic/14-array-remove.html(벨로퍼트님 블로그)
  const onRemove = (boardNo) => {
    setBoards(boardList.filter(board => board.boardNo !== boardNo));
    // 삭제하려는 board의 번호가 아닌것들만 반환시켜서 boardList에 넣기
  }


  return (
    <div className="App">
      <h1>KH - MOVIES</h1>
      <Tables boardList={boardList} onRemove={onRemove}></Tables>
    </div>
  );
}

export default App;
