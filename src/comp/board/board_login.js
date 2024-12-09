import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { memberLogin } from '../api/member';

export default function Study() {

    const idRef = useRef('');
    const pwRef = useRef('');

    const navigate = useNavigate();

    //페이지 접속 했을 때
    useEffect(() => {
        localStorage.removeItem('userId');
    }, [])

    const loginAction = () => {

        const idValue = idRef.current.value;
        const pwValue = pwRef.current.value;

        let obj = new Object();
        obj.userId = idValue;
        obj.userPw = pwValue;

        memberLogin(obj)
        .then(res => {
            const data = res.data;
            if(data.code === '200' && data.data === 'Y') {
                console.log('로그인 성공')
                localStorage.setItem('userId', obj.userId);
                localStorage.setItem('auto', 'random UUID JWT');
                navigate('/boardMain');
            } else {
                idRef.current.value='';
                idRef.current.value='';
                idRef.current.focus();
                alert('아이디 혹은 비밀번호가 틀렸습니다.');
            }
            console.log(res)
        })
    }

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>로그인</h1>
            <div style={styles.form}>
                <input
                    type="text"
                    placeholder="아이디"
                    ref={idRef}
                    style={styles.input}
                />
                <input
                    type="password"
                    placeholder="비밀번호"
                    ref={pwRef}
                    style={styles.input}
                />
                <input
                    type="button"
                    value="로그인"
                    onClick={loginAction}
                    style={styles.loginButton}
                />
                <input
                    type="button"
                    value="회원가입"
                    onClick={() => navigate("/join1")}
                    style={styles.registerButton}
                />
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5",
    },
    header: {
        fontSize: "2rem",
        color: "#333",
        marginBottom: "20px",
    },
    form: {
        width: "300px",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        backgroundColor: "white",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    input: {
        width: "100%",
        padding: "10px",
        marginBottom: "15px",
        border: "1px solid #ccc",
        borderRadius: "4px",
        fontSize: "16px",
    },
    loginButton: {
        width: "100%",
        padding: "10px",
        backgroundColor: "#007BFF",
        color: "white",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        fontSize: "16px",
        marginBottom: "10px",
    },
    registerButton: {
        width: "100%",
        padding: "10px",
        backgroundColor: "#28A745",
        color: "white",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        fontSize: "16px",
    },
};