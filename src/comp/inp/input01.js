import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function InStudy() {

    const [inp, setInp] = useState('');

    const navigate = useNavigate();

    function send() {
        alert(inp);

        localStorage.setItem('study', inp);
        navigate('/out1')
    }

    return(
        <div>
            <h1>Input</h1>
            <input
            type='text'
            value={inp}
            onChange={ e => setInp(e.target.value)} />

            <input 
            type='button'
            value='전송'
            onClick={send} />
        </div>
    )
}