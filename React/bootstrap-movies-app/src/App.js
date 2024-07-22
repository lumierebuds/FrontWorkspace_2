import logo from './logo.svg';
import './App.css';
import List from './components/List'
import {useState} from "react"



function App() {

  let [list, setList] = useState([
    {
      bno: 1,
      title: "Movie 1",
      genre: "Drama",
      release_date: "2022-01-01"
    }, 
    {
      bno: 2,
      title: "Movie 2",
      genre: "Action",
      release_date: "2022-02-01"
    },
    {
      bno: 3,
      title: "Movie 3",
      genre: "Comedy",
      release_date: "2022-03-01"
    }
  ])

  const onDelete = (bno) => {
    setList(list.filter((value) => value.bno !== bno));
  }

  return (
    <div className="App">
      <List props={{ list,onDelete }}></List>
    </div>
  );
}

export default App;
