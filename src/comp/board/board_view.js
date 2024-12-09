import { useEffect, useState } from "react"
import { viewBoard, deleteBoard, boardGoodUp } from '../api/board'
import { useNavigate } from "react-router-dom";

export default function BoardView() {

    const [boardView, setView] = useState([]);

    const navigate = useNavigate();


    /**
     * 글 불러오기
     */
    useEffect(() => {
        view()
    }, [])

    function view() {
        const id = localStorage.getItem('boardNum');
        console.log('게시판 아이디 : ', id);
        let obj = new Object();
        obj.boardId = id;
        console.log(obj)

        viewBoard(obj)
        .then(res => {
            if(res.data.code === '200') {
                setView(res.data.data)
            }
        })
        .catch(error => {
            console.log(error)
        });

    }

    /**
     * 글 삭제하기
     * @param {} author 
     */
    function deleteAt(author) {
        const deleteId = localStorage.getItem('boardNum');
        const loginUser = localStorage.getItem('userId');

        let obj = new Object();
        obj.boardId = deleteId;


        if(loginUser === author) {
            deleteBoard(obj)
            .then(res=>{
                if(res.data.code === '200') {
                    alert('게시글이 정상적으로 삭제 되었습니다.')
                    window.history.back()
                }
            })
        } else {
            alert('본인이 작성하지 않은 게시글은 삭제 할 수 없습니다.')
        }

    }

    /**
     * 게시글 수정
     * @param {} author 
     */

    function editBoard(author) {
        const loginUser = localStorage.getItem('userId');

        if(loginUser === author) {
            navigate('/boardModify')
        } else {
            alert('게시글 작성자만 수정 할 수 있습니다.')
        }
    }

    /**
     * 게시글 추천
     */
    function goodBoard() {
        const goodId = localStorage.getItem('boardNum');
        let obj = new Object();
        obj.boardId = goodId;

        boardGoodUp(obj)
        .then(res => {
            if(res.data.code === '200') {
                alert('게시글을 추천하였습니다.')
            }
        })
    }

    return(
        <div style={{ margin: "20px", padding: "20px", border: "1px solid #ddd", borderRadius: "8px", maxWidth: "800px", marginLeft: "auto", marginRight: "auto" }}>
            {boardView ? (
                <>
                    <h1 style={{ textAlign: "center", color: "#333", marginBottom: "20px" }}>{boardView.title}</h1>
                    <div style={{ fontSize: "14px", color: "#777", marginBottom: "10px" }}>
                        <p>작성자: <strong>{boardView.memberId}</strong></p>
                        <p>작성일: {new Date(boardView.createdAt).toLocaleString()}</p>
                        <p>추천 수: {boardView.boardGood}</p>
                    </div>
                    <hr style={{ border: "1px solid #eee" }} />
                    <div style={{ marginTop: "20px", fontSize: "16px", lineHeight: "1.6" }}>
                        <p>{boardView.content}</p>
                    </div>
                    <button
                        onClick={() => deleteAt(boardView.memberId)}
                        style={{
                            marginTop: "20px",
                            padding: "10px 20px",
                            border: "none",
                            backgroundColor: "#007BFF",
                            color: "white",
                            borderRadius: "4px",
                            cursor: "pointer",
                        }}
                    >
                        삭제하기
                    </button>
                    <button
                        onClick={() => editBoard(boardView.memberId)}
                        style={{
                            marginTop: "20px",
                            padding: "10px 20px",
                            border: "none",
                            backgroundColor: "#007BFF",
                            color: "white",
                            borderRadius: "4px",
                            cursor: "pointer",
                            marginLeft: '16px'
                        }}
                    >
                        수정하기
                    </button>
                    <button
                        onClick={() => goodBoard()}
                        style={{
                            marginTop: "20px",
                            padding: "10px 20px",
                            border: "none",
                            backgroundColor: "#007BFF",
                            color: "white",
                            borderRadius: "4px",
                            cursor: "pointer",
                            marginLeft: '16px'
                        }}
                    >
                        게시글 추천하기
                    </button>
                    <button
                        onClick={() => window.history.back()}
                        style={{
                            marginTop: "20px",
                            padding: "10px 20px",
                            border: "none",
                            backgroundColor: "#007BFF",
                            color: "white",
                            borderRadius: "4px",
                            cursor: "pointer",
                            marginLeft: '16px'
                        }}
                    >
                        뒤로가기
                    </button>
                </>
            ) : (
                <p style={{ textAlign: "center", color: "#999" }}>게시글을 불러오는 중입니다...</p>
            )}
        </div>
    )
}