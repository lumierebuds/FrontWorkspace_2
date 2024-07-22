import { Table, Button } from "reactstrap";

function List({ props }) {
  let { list, onDelete } = props; // 구조분해 할당을 통해서 가져온다.
  console.log(props);
  return (
    <div id="movie-area">
      <h1>KH1-Movies</h1>
      <Table>
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
              <tr>
                <td>{value.bno}</td>
                <td>{value.title}</td>
                <td>{value.genre}</td>
                <td>{value.release_date}</td>
                    <td><Button onClick={ ()=>onDelete(value.bno)}>Delete</Button></td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default List;
