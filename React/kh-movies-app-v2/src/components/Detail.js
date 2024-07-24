import { useNavigate, useParams } from "react-router-dom";
import { Table, Button } from "reactstrap";

function Detail(props) {

    let { list } = props; 
    let { id } = useParams();

    const movie = list.find((value) => value.id == id); 


    const navi = useNavigate();

    console.log(movie);

    return (
        <div>
            <h1>Detail Movie</h1>
            <table className="detail-table">
                <tr>
                    <th>ID</th>
                    <td style={{width:"80%"}}>
                        {movie.id}
                    </td>
                </tr>
                <tr>
                    <th>제목</th>
                    <td style={{width:"80%" }}>
                       {movie.title}
                    </td>
                </tr>
                <tr>
                    <th>장르</th>
                    <td style={{width:"80%" }}>
                        {movie.genre}
                    </td>
                </tr>
                <tr>
                    <th>줄거리</th>
                    <td style={{width:"80%", height:"200px" }}>
                        {movie.story}
                    </td>
                </tr>
                <tr>
                    <th>출시일</th>
                    <td style={{width:"80%" }}>
                       {movie.release_date}
                    </td>
                </tr>
            </table>
            <div>
                <Button onClick={()=> {navi('/update/'+movie.id)}}>Edit Movie</Button>
            </div>
        </div>
    )
}

export default Detail;