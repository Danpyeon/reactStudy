import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Study() {

    const idRef = useRef('');
    const pwRef = useRef('');

    const navigate = useNavigate();

    const loginAction = () => {
        console.log('test')

        const idValue = idRef.current.value;
        const pwValue = pwRef.current.value;
        
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