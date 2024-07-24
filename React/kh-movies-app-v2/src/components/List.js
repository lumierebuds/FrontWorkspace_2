import { useNavigate } from "react-router-dom";
import { Table, Button } from "reactstrap";

function List(props ) {
  let { list, onDelete, setBoardDetail } = props; // 구조분해 할당을 통해서 가져온다.

  const navi = useNavigate();

  return (
    <div>
      <h1>KH1-Movies</h1>
      <table className="list-table">
        <thead>
          <tr>
            <th>글번호</th>
            <th>제목</th>
            <th>장르</th>
            <th>개봉날짜</th>
            <th>상세보기</th>
          </tr>
        </thead>
        <tbody>
          {list.map((value) => {
            return (
              <tr key={value.id} onClick={() => {
                navi('/detail/' + value.id);
              }}>
                <td>{value.id}</td>
                <td>{value.title}</td>
                <td>{value.genre}</td>
                <td>{value.release_date}</td>
                <td><Button onClick={(e) => {
                  e.stopPropagation();
                  onDelete(value.id)
                }}>Delete</Button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default List;
