
import { useNavigate } from "react-router-dom";
import useInput from "../useinput";

function BoardUpdate(props) {
  
    let { boardDetail, setBoardDetail ,  boardList, setBoardList } = props;

    const navi = useNavigate();
    // 상세보기 + 등록

    // 수정하기 완료후 내가 수정한 게시글 상세보기로 이동.
    // 등록기능도 똑같이 등록 완류후 게시글 상세보기화면으로 이동

    let [board, setBoard, onInputChange] = useInput(boardDetail); 

    function boardUpate() {
        console.log(board.글번호);
        // 입력값 검사
        if (!(board.글제목 && board.글내용 && board.작성자)) {
            alert('필수입력값입니다.');
            return;
        }

        // map을 통한 저장
        const mappedList = boardList.map((value) => {
            if (value.글번호 === board.글번호) {
                return board; 
            }
            return value;
        })

        setBoardList(mappedList); // 게시글 목록보기로 갈시 렌더링되는 게시글 리스트
        setBoardDetail(board); // 상세보기로 갈시 렌더링되는 게시글 
        alert("게시글을 수정했습니다.");
        navi('/detail/' + board.글번호);
    }

    return (
        <div className="outer">
        <h2>게시판 수정</h2>
        <table className="enroll-table">
            <tr>
            <th>제목</th>
            <td colSpan={3}>
                <input
                type="text"
                name="글제목"
                onChange={onInputChange}
                defaultValue={boardDetail.글제목}
                />
            </td>
            </tr>
            <tr>
            <th>작성자</th>
            <td colSpan={3}>
                <input
                type="text"
                name="작성자"
                onChange={onInputChange}
                defaultValue={boardDetail.작성자}
                />
            </td>
            </tr>
            <tr>
            <th>글내용</th>
            <td colSpan={3} style={{ height: "200px" }}>
                <textarea
                name="글내용"
                onChange={onInputChange}
                defaultValue={boardDetail.글내용}
                />
            </td>
            </tr>

            <tr>
            <th colSpan={4}>
                <button onClick={boardUpate}>등록</button>
            </th>
            </tr>
        </table>
        </div>
    );
}

export default BoardUpdate;
