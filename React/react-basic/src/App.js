import logo from "./logo.svg";
import "./App.css";
import ListItems from "./components/ListItems.js";
import Modal from"./components/Modal.js"
import { useState } from "react";
import LifeCycle from "./01_LifeCycle.js";

function App() {
  let b = 1;

  function changeName() {
    setClassname("KH A CLASS");

    // classname = 'KH A CLASS';
    // console.log(classname);
    // document.querySelector("h1").innerText = classname;
  }

  //let classname = 'KH C CLASS';
  let [classname, setClassname] = useState("KH C CLASS");

  // let array = ['게시글 제목1', '게시글 제목2', '게시글 제목3'];

  let [post, setPost] = useState([
    {
      title: "게시글 제목1",
      content: "1번 글내용",
      postDate: "12월 25일",
      like:0
    },
    {
      title: "게시글 제목2",
      content: "2번 글내용",
      postDate: "12월 26일",
      like:0
    },
    {
      title: "게시글 제목3",
      content: "3번 글내용",
      postDate: "12월 27일",
      like:0
    },
  ]);

  // let [title, setTitle] = useState("");
  // let [content, setContent] = useState("");
  

  // UI 상태관리용 state 
  let [modal, setModal] = useState(false);
  let [selectBoard, setSelectBoard] = useState(post[0]);


  let [board, setBoard] = useState({
    title: '',
    content: '',
    like : 0,
    postDate: new Date().toLocaleDateString()
  })

  function savePost() {
    if (board.title && board.content) {
      let newPost = {
        ...board,
        postDate : new Date().toLocaleDateString()
      }
      setPost([...post, newPost]); // 배열의 깊은 복사  
    }
  }

  function onInputChange(e) {
    const {name, value } = e.target; 
    setBoard({
      ...board,
      [name]: e.target.value
    }); 
  }



  return (
    <div className="App">
      <br />
      <h1>{classname}</h1>

      {/* <ul>
        <ListItems array={array}></ListItems>
      </ul> */}
      {post.map(function (value, index) {
        return (
          <div key={index} className="list">
            <h4 onClick={() => {
              setModal(!modal); // 기존 모달값이 가지고 있는것의 반대로 보여주게 함 -> false => true, true => false 
              setSelectBoard(value);
            }}>{value.title} <span onClick={(e) => {
              e.stopPropagation(); // 모달창이 열리는 이벤트를 막아줌 - 더블링 방식인 이벤트를 막는 속성 
              
              // like 값 증가
              let selectedPost = post[index];  // 현재 index에 해당하는 값을 선택
              selectedPost.like += 1; // 선택한 게시글이 가진 like 값을 대입연산자로 1 증가시킨다.
              setPost([...post]); // 다시 깊은 복사로 렌더링한다. 

    
            }}>❤</span> {value.like} </h4>
            <p> {value.postDate}</p>
          </div>
        );
      })}

      <label>제목</label>
      <input
        name='title'
        value={board.title}
        onChange={onInputChange}
      />
      <br />
      <br />
      <label>내용</label>
      <textarea
        name='content'
        value={board.content}
        onChange={onInputChange}
      ></textarea>

      <button onClick={savePost}>글등록</button>

      {/* <LifeCycle></LifeCycle> */}

      {
        // modal ? <Modal/> : null // 삼항 연산자 방식으로 Modal 창이 활성화 될때 보이게 만든다. 
        modal && <Modal board={ selectBoard } /> // && 연산자의 특성을 활용해 Modal 창 활성(주석된 코드와 동일한 기능)
      }
    </div>
    // 이 모든것이 jsx 문법에 해당한다.

    // 게시글 내용이 포함되도록 수정,
    // 게시글 등록할때도 게시글 내용을 함께 추가할 수 있도록 수정
    // 1) 게시글 내용 태그 생성
    // 2) 게시글 내용 관리 state 생성
    // 3) 게시글 등록시 글제목, 내용을 묶어서 객체로 생성
  );
}

export default App;
