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
        console.log('test')

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
                localStorage.setItem('userId', userId);
                localStorage.setItem('auto', 'random UUID JWT');
                navigate('/itemList');
            } else {
                idRef.current.value='';
                idRef.current.value='';
                idRef.current.focus();
                alert('아이디 입력');
            }
            console.log(res)
        })
    }

    return(
        <div>
            <h1>Login</h1>
            <input 
            type="text"
            placeholder="ID"
            ref={idRef}/>
            
             <br/> <br/>

            <input 
            type="password"
            placeholder="PW"
            ref={pwRef}/> 

            <br/> <br/>

            <input 
            type="button"
            value='Login'
            onClick={loginAction} />

            <br/> <br/>

            <input 
            type="button"
            value='회원가입'
            onClick={
                () => {
                    navigate('/join1');
                }
            } />
        </div>
        
    )
}