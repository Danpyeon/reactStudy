import { useEffect, useState } from 'react'
import {modifyBoard, upDateBoard} from '../api/board'
import { useNavigate } from 'react-router-dom';



export default function Study() {

    const [boardTitle, setBoardTitle] = useState('');
    const [boardContent, setBoardContent] = useState('');
    const [boardMemberId, setMemberId] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        const member = localStorage.getItem('userId');
        if(member !== null) {
            setMemberId(member);
        }
    }, [])

    function inModifyBoard() {
        console.log('게시글 수정하기')
        const id = localStorage.getItem('boardNum');
        let param = new Object()
        param.boardId = id;
        param.title = boardTitle;
        param.content = boardContent;
        param.memberId = boardMemberId;
        modifyBoard(param)
        .then(res => {
            if(res.data.code === '200') {
                alert('게시글이 수정 되었습니다.')
                navigate('/boardMain')
            }
        })

    }

    return (
        <div style={styles.container}>
            <div style={styles.form}>
                <h1 style={styles.header}>게시글 수정</h1>
                <div style={styles.field}>
                    <label style={styles.label}>제목</label>
                    <input
                        type="text"
                        value={boardTitle}
                        onChange={(e) => {
                            e.preventDefault();
                            setBoardTitle(e.target.value);
                        }}
                        style={styles.input}
                    />
                </div>
                <div style={styles.field}>
                    <label style={styles.label}>내용</label>
                    <textarea
                        name="content"
                        value={boardContent}
                        onChange={(e) => {
                            e.preventDefault();
                            setBoardContent(e.target.value);
                        }}
                        style={styles.textarea}
                    />
                </div>
                <div style={styles.buttons}>
                    <input
                        type="button"
                        value="수정하기"
                        onClick={inModifyBoard}
                        style={styles.submitButton}
                    />
                    <input
                        type="button"
                        value="뒤로가기"
                        onClick={() => {
                            navigate("/boardMain");
                        }}
                        style={styles.backButton}
                    />
                </div>
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f9f9f9",
    },
    form: {
        width: "400px",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        backgroundColor: "white",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    header: {
        fontSize: "1.5rem",
        color: "#333",
        textAlign: "center",
        marginBottom: "20px",
    },
    field: {
        marginBottom: "15px",
    },
    label: {
        display: "block",
        fontSize: "14px",
        color: "#555",
        marginBottom: "5px",
    },
    input: {
        width: "100%",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "4px",
        fontSize: "14px",
    },
    textarea: {
        width: "100%",
        height: "100px",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "4px",
        fontSize: "14px",
        resize: "none",
    },
    buttons: {
        display: "flex",
        justifyContent: "space-between",
    },
    submitButton: {
        flex: "0 0 48%",
        padding: "10px 0",
        backgroundColor: "#007BFF",
        color: "white",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        fontSize: "14px",
    },
    backButton: {
        flex: "0 0 48%",
        padding: "10px 0",
        backgroundColor: "#6c757d",
        color: "white",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        fontSize: "14px",
    },
};