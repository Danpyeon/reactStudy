import axios from "axios"
import { useRef, useState } from "react";

export default function Ax1() {

    const [지역, 변경지역] = useState([]);
    const text = useRef();

    const text2 = useRef();

    function baxios1() {
        console.log('==== axios get');

        axios.get('http://localhost:8080/api/area/list')
        .then(res => {
            console.log(res);
            if(res.data.code === '200') {
                변경지역(res.data.data);
            }
        })
    }

    function baxios2() {
        console.log(text.current.value);
        const params = {
            id: text.current.value
        }

        console.log(params);

        axios.get('http://localhost:8080/api/area/byId', {params})
        .then(res => {
            console.log(res.data.data);
        })
    }

    function baxios3() {
        axios.post('http://localhost:8080/api/member/list')
        .then(res => {
            console.log(res.data.data);
        })
    }

    function baxios4() {
        const obj = {
            "id": text2.current.value
        }
        axios.post('http://localhost:8080/api/member/findId', JSON.stringify(obj),
    {
        headers: {
            'Content-Type' : 'application/json'
        }
    })
        .then(res => {
            console.log(res.data.data)
        })
    }

    return(
        <div>
            <h1>Axios Test</h1>
            <h1>Get</h1>
            <input type='button' 
            value='get 방식' 
            onClick={baxios1}/> <br/><br/>

            <input
            type='text' ref={text}/> <br/><br/>

            <input type='button' 
            value='get 방식2' 
            onClick={baxios2}/> <br/>
            <h1>Post</h1>

            <input
            type='button'
            onClick={baxios3}
            value='Post 방식' /> <br/><br/>

            <input
            type='text'
            ref={text2}/> <br/><br/>

            <input
            type='button'
            onClick={baxios4}
            value='Post 방식2' /> <br/>
        </div>
    )
}