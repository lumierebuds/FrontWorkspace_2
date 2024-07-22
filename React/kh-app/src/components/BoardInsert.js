
function BoardInsert() {
    return (
        <div className="outer">
            <h2>게시판 등록</h2>
            <table className="enroll-table">
                <tr>
                    <th>제목</th>
                    <td colSpan={3}>
                        <input type="text" name="title"/>
                    </td>
                </tr>
                <tr>
                    <th>작성자</th>
                    <td colSpan={3}>
                        <input type="text" name="author"/>
                    </td>
                </tr>
                <tr>
                    <th>글내용</th>
                    <td colSpan={3} style={{ height:  '200px'}}>
                        <textarea name="content"/>
                    </td>
                </tr>

                <tr>
                    <th colSpan={4}><button>등록</button></th>
                </tr>
                

            </table>
        </div>
    )
}

export default BoardInsert;