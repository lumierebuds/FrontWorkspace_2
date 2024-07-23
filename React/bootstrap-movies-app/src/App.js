import './App.css';
import List from './components/List'
import Insert from './components/Insert';
import {useState} from "react"
import data from './data';


function App() {

  
  let [list, setList] = useState(data);

  const onDelete = (id) => {
    setList(list.filter((value) => value.id !== id));
  }

  
  return (
    <div className="App">
      <List list={list} onDelete={onDelete}></List>
      <Insert list={list} setList={setList}></Insert>
    </div>
  );
}

export default App;
