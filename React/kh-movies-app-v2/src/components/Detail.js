import { Table, Button } from "reactstrap";

function Detail(props) {

    let {boardDetail} = props; 

    console.log(boardDetail);

    return (
        <div>
            <h1>Detail Movie</h1>
            <table className="detail-table">
                <tr>
                    <th>ID</th>
                    <td style={{width:"80%"}}>
                        {boardDetail.id}
                    </td>
                </tr>
                <tr>
                    <th>제목</th>
                    <td style={{width:"80%" }}>
                       {boardDetail.title}
                    </td>
                </tr>
                <tr>
                    <th>장르</th>
                    <td style={{width:"80%" }}>
                        {boardDetail.genre}
                    </td>
                </tr>
                <tr>
                    <th>줄거리</th>
                    <td style={{width:"80%", height:"200px" }}>
                        {boardDetail.story}
                    </td>
                </tr>
                <tr>
                    <th>출시일</th>
                    <td style={{width:"80%" }}>
                       {boardDetail.release_date}
                    </td>
                </tr>
            </table>
            <div>
                <Button>Edit Movie</Button>
            </div>
        </div>
    )
}

export default Detail;