import { useNavigate, useParams } from "react-router-dom";

function BoardDetail(props) {
    let { boardList } = props;
    
    let navigate = useNavigate();


    // 1) 내가 선택한 게시글 정보 얻어오기
    // 2) 게시글 정보 BoardDetail에 넘겨주기 
    // 3) 데이터 바인딩 
    
    const { boardNo } = useParams(); // 'detail/boardNo' 로 요청이 들어올때 바인딩 되는 값들
    const boardDetail = boardList.find((value) => value.글번호 == boardNo);  // 글번호에 해당하는 게시글 정보를 반환해서 해당 페이지에서 ㅂ볼 ㅅ 있다. 
    
    return (
        <div className="outer">
            <h2>게시판 상세보기</h2>
            <table className="detail-table">
                <tr>
                    <th colSpan={4}>{boardDetail.글제목}</th>
                </tr>
                <tr>
                    <th>작성자</th>
                    <td>{boardDetail.작성자}</td>
                    <th>작성일</th>
                    <td>{boardDetail.작성일}</td>
                </tr>
                <tr>
                    <th>글내용</th>
                    <td colSpan={3} style={{height:"200px"}}>{boardDetail.글내용}</td>
                </tr>
            </table>
            <div className="btn-area">
                <button onClick={() => {
                    
                    navigate('/update')
                }}>수정</button>
            </div>
        </div>
    )
}

export default BoardDetail;