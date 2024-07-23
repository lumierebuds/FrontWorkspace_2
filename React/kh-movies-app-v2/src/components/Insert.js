import { useState } from "react";
import { Button, Table } from "reactstrap";

function Insert(props) {
    let { list, setList } = props;

    let [movie, setMovie] = useState({
        id: 0, 
        title: '', 
        genre: '',
        story:'',
        release_date: ''
    });

    function onInputChange(e) {
        const { name, value } = e.target; 
        setMovie({
            ...movie,
            [name]: value // 브라켓 표현식으로 확인한다. 
        })
    }

    function insertMovie() {

        if (!(movie.id && movie.title && movie.genre && movie.release_date)) { 
            // 모든 입력값이 입력되지 않았을때
            alert('모든 입력값은 필수입니다.'); 
            return; 
        } 
        
        let valid = list.find((value) =>  value.id === parseInt(movie.id) ); // 중복된 id의 movie가 있다면 반환, 없으면 null 반환
        if (valid) {
            alert('이미 사용중인 아이디입니다.');
            return; 
        }

        setList([...list, movie]); 
    }


    return (
        <div>
            <h1>Create Movie</h1>
            <table className="enroll-table">
                <tr>
                    <th>ID</th>
                    <td>
                        <input type="text" placeholder="Input movie id" value={movie.id} name="id" onInput={onInputChange} style={{width:"100%"}}/>
                    </td>
                </tr>
                <tr>
                    <th>제목</th>
                    <td>
                        <input type="text" placeholder="Input movie title" value={movie.title} name="title" onInput={onInputChange} style={{width:"100%"}}/>
                    </td>
                </tr>
                <tr>
                    <th>장르</th>
                    <td>
                        <input type="text" placeholder="Input movie genre" value={movie.genre} name="genre" onInput={onInputChange}  style={{width:"100%"}}/>
                    </td>
                </tr>
                <tr>
                    <th>줄거리</th>
                    <td>
                        <textarea placeholder="Input movie story" value={movie.story} name="story" onInput={onInputChange} style={{width:"100%" , height:"200px"}} ></textarea>
                    </td>
                </tr>


                <tr>
                    <th>출시일</th>
                    <td>
                        <input type="date" style={{width:"100%"}} value={movie.release_date} name="release_date" onInput={onInputChange}/>
                    </td>
                </tr>
            </table>
            <div>
                <Button onClick={insertMovie}>Add Movie</Button>
            </div>
        </div>
    )
}

export default Insert;