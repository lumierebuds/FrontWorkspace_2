import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "reactstrap";

function Update(props) {

    let { id } = useParams();
    let { list, setList, setBoardDetail} = props;

    const navi = useNavigate();
    const movieDetail = list.find((value) => value.id == id);

    const [m, setM] = useState(movieDetail);

    const inputChange = (e) => {
        let { name, value } = e.target; 
        setM({
            ...m,
            [name]: value
        })
    }

    const updateMovie = () => {
        if (!(m.title && m.genre && m.story && m.release_date)) {
            alert('필수 입력값입니다.');
            console.log(m.id);
            return;
        } 
        console.log("호출");
        
        const mappedList = list.map((value) => {
            if (value.id == m.id) {
                return m;
            }
            return value; 
        })

        setList(mappedList);
        navi('/detail/' + m.id);
    }




    return (
        <div>
        <h1>Update Movie</h1>
        <table className="enroll-table">
            <tr>
                <th>ID</th>
                <td>
                    {movieDetail.id}
                </td>
            </tr>
            <tr>
                <th>제목</th>
                <td>
                    <input type="text" placeholder="Input movie title" name="title" defaultValue={movieDetail.title} onInput={inputChange} style={{width:"100%"}}/>
                </td>
            </tr>
            <tr>
                <th>장르</th>
                <td>
                    <input type="text" placeholder="Input movie genre" name="genre" defaultValue={movieDetail.genre}  onInput={inputChange} style={{width:"100%"}}/>
                </td>
            </tr>
            <tr>
                <th>줄거리</th>
                <td>
                    <textarea placeholder="Input movie story" name="story" defaultValue={movieDetail.story}  onInput={inputChange} style={{width:"100%" , height:"200px"}} ></textarea>
                </td>
            </tr>


            <tr>
                <th>출시일</th>
                <td>
                    <input type="date" style={{width:"100%"}} name="release_date" defaultValue={movieDetail.release_date} onInput={inputChange}  />
                </td>
            </tr>
        </table>
        <div>
            <Button onClick={updateMovie}>Add Movie</Button>
        </div>
    </div>
    )
} 

export default Update; 
