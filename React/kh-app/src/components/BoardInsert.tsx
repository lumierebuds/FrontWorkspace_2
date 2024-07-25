
import { Props } from "../type/boardType";
import useInput from "../useinput";
import { useNavigate } from "react-router-dom";

function BoardInsert(props:Props) {

    let { boardList, setBoardList } = props;  

    const navi = useNavigate();
    // 훅 함수를 이용한 데이터 바인딩 
    // 게시글
    let [board, setBoard, onInputChange] = useInput({
        글번호: '',
        글제목: '',
        글내용: '',
        작성자: '',
        작성일: '',
    }); 


    function boardInsert() {
        // 입력값 검사
        if (!(board.글제목 && board.글내용 && board.작성자)) {
            alert('필수입력값입니다.');
            return;
        }
        let newBoard = {
            ...board, 
            글번호: Math.max(...boardList.map(value => value.글번호)) + 1, // 가장 큰 글번호 값이 나옴
            작성일: new Date().toLocaleDateString()
        }

        setBoardList([...boardList, newBoard]);
        alert("게시글이 등록되었습니다.");
        navi('/detail/' + newBoard.글번호);
    }


    return (
        <div className="outer">
            <h2>게시판 등록</h2>
            <table className="enroll-table">
                <tr>
                    <th>제목</th>
                    <td colSpan={3}>
                        <input type="text" name="글제목" onInput={onInputChange}/>
                    </td>
                </tr>
                <tr>
                    <th>작성자</th>
                    <td colSpan={3}>
                        <input type="text" name="작성자" onInput={onInputChange}/>
                    </td>
                </tr>
                <tr>
                    <th>글내용</th>
                    <td colSpan={3} style={{ height:  '200px'}}>
                        <textarea name="글내용" onInput={onInputChange}/>
                    </td>
                </tr>

                <tr>
                    <th colSpan={4}><button onClick={boardInsert}>등록</button></th>
                </tr>
                

            </table>
        </div>
    )
}

export default BoardInsert;