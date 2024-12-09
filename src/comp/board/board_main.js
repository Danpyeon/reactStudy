import { useEffect, useState } from 'react'
import {boardList} from '../api/board'
import { useNavigate } from 'react-router-dom';

export default function Study() {

    const [getBoardList, setList] = useState([]);

    const navigate = useNavigate();

    //Board List 불러와서 담아두기
    function boardListGet() {
        boardList()
        .then(res => {
            console.log(res.data.data);
            if(res.data.code === '200') {
                //가장 최근 게시글 상단에 띄우기
                //b - a 내림차순 정렬. new Date()로 String에서 Data 객체로 변환하여 비교 후 setList 저장
                const sortedData = res.data.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                setList(sortedData);
            }
        })
        .catch((error) => {
            console.error("게시판 리스트를 불러오지 못했습니다:", error);
        });
    }

    //useEffect 로 List 가져오기
    useEffect(() => {
        boardListGet();
        localStorage.removeItem('boardNum');
    }, [])

    function findBoard(boardIdx) {
        console.log(boardIdx)
        localStorage.setItem('boardNum', boardIdx);
        navigate('/boardView')
    }


    return(
        <div>
            <h1>Main</h1>
            <div>

            <div style={{ margin: "20px", padding: "20px", border: "1px solid #ddd", borderRadius: "8px" }}>
            <h1 style={{ textAlign: "center", color: "#333" }}>게시판 목록</h1>
            
            {getBoardList.length > 0 ? (
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                    {/**
                     * Style 적용 테이블 꽉 채우며 경계선 겹치지 않도록 설정
                     */}
                    <thead>
                        <tr style={{ backgroundColor: "#f4f4f4", borderBottom: "2px solid #ccc" }}>
                            <th style={{ padding: "10px", textAlign: "center" }}>제목</th>
                            <th style={{ padding: "10px", textAlign: "center" }}>작성자</th>
                            <th style={{ padding: "10px", textAlign: "center" }}>작성 시간</th>
                        </tr>
                    </thead>
                    <tbody>
                        {getBoardList.map((item, index) => (
                            <tr
                                key={index}
                                style={{
                                    borderBottom: "1px solid #ddd",
                                    backgroundColor: index % 2 === 0 ? "#fafafa" : "#fff",
                                    cursor: 'pointer'
                                }}
                                onClick={e => {
                                    e.preventDefault();
                                    findBoard(item.boardIdx);
                                }}
                            >
                                <td style={{ padding: "10px" }}>{item.title}</td>
                                <td style={{ padding: "10px" }}>{item.memberId}</td>
                                <td style={{ padding: "10px" }}>
                                    {new Date(item.createdAt).toLocaleString()}
                                    {/** new Date(item.createdAt).toLocaleString() 통해서 
                                    * 읽기 좋은 형식으로 변환
                                    */}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p style={{ textAlign: "center", color: "#666" }}>게시글이 없습니다.</p>
            )}


                    <button
                        onClick={() => navigate('/boardRegist')}
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
                        게시글 작성하기
                    </button>
                    <button
                        onClick={() => navigate('/boardLogin')}
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
                        Logout
                    </button>
            </div>
        </div>
        </div>
    )
}