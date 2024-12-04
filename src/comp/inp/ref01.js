import { useRef, useState } from "react"

export default function Study() {

    let data0 = 0;
    const [값1, 변경값1] =  useState(0);
    const 값2 = useRef(0);

    return(
        <div>
            <h3>UseState</h3>
            <input type='button' value='값 증가'
            onClick={() => {
                변경값1(값1+1);
            }} /> <br/><br/>
            <h4>값 : {값1}</h4>

            <h3>UseRef</h3>
            <input type='button' value='값 증가' onClick={
                () => {
                    값2.current++
                }
            }/> <br/><br/>
            <h4>값 :{값2.current}</h4>

            <h3>JS</h3>
            <input type='button' value='값 증가' onClick={
                () => {
                    data0++;
                }
            }/> <br/><br/>
            <h4>값 : {data0}</h4>
        </div>
    )
}