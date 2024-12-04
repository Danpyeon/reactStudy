import { useEffect, useState } from "react";


export default function OutStudy() {

    const [msg, setMsg] = useState('');

    function start() {
        const data = localStorage.getItem('study');
        if (data !== '' && data !== 'null') {
            setMsg(data);
        }

        
    }

    useEffect(() => {
        start();
    }, [])

    return(
        <div>
            <h1>OutPut</h1>
            {msg}
        </div>
    )
}