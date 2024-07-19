
function Tables({ boardList, onRemove }) {

    return (
        <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">글번호</th>
                        <th scope="col">제목</th>
                        <th scope="col">장르</th>
                        <th scope="col">개봉날짜</th>
                        <th scope="col">상세보기</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        boardList.map((board) => {
                            return (
                                <tr>
                                    <td scope="col">{ board.boardNo }</td>
                                    <td scope="col">{ board.title }</td>
                                    <td scope="col">{ board.genre }</td>
                                    <td scope="col">{ board.date }</td>
                                    <td scope="col"><button className="btn btn-secondary" onClick={()=> onRemove(board.boardNo)}>Delete</button></td>
                                </tr>
                            
                            )    
                        })        
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Tables;