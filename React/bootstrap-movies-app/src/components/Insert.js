import { useState } from "react";


function Insert({ props }) {
    let { list } = props;

    let [board, setBoard] = useState({
        id: '',
        title: '',
        genre: '',
        release_date: new Date().toLocaleDateString()
    });

    const insertPost = () => {
        
        // 1. id가 일치하는 게시글이 있다면 '이미 등록된 id입니다' 알럿창과 함께 다시 입력할 수 있게 id 비우기
        for (let i = 0; i < list.length; i++){
            if (list[i].id === parseInt(board.id)) {
                alert("이미 등록된 id입니다.");
            }
        }
    }

    function onInputChange(e) {
        const { name, value } = e.target; 
        setBoard({
            ...board,
            [name]: e.target.value
        })
    }


    return (
        <div id="movie-area">
        <h1>KH1-Movies</h1>
        <table className="enroll-table">
                <tr>
                    <th>ID</th>
                    <td colSpan={3}>
                        <input type="text" name="id" placeholder="Input movie id" value={board.id} onChange={onInputChange} />
                    </td>
                </tr>
                <tr>
                    <th>제목</th>
                    <td colSpan={3}>
                        <input type="text" name="title" placeholder="Input movie title" value={board.title} onChange={onInputChange} />
                    </td>
                </tr>
                <tr>
                    <th>장르</th>
                    <td colSpan={3}>
                        <input type="text" name="genre" placeholder="Input movie genre" value={board.genre} onChange={onInputChange} />
                    </td>
                </tr>

                <tr>
                    <th>출시일</th>
                    <td colSpan={3}>
                        <input type="date" name="release_date" value={board.release_date} onChange={onInputChange} />
                    </td>
                </tr>

                <tr>
                    <th colSpan={4}><button onClick={() => {
                        insertPost()
                    }}>등록</button></th>
                </tr>

            </table>
      </div>
    )
}

export default Insert;