import { useReducer, useState } from "react"


/**
 * 공식 명칭 > reducer
 * status : 첫 번째 인자값(oldStatus), 호출 되었을 때 reducer에 담겨 있는 값
 * action : reducer를 호출 되었을 때 action에 값이 들어옴
 * reducer 함수는  action의 값을 확인 > status 값 변경
 */
function changeTest(status, action) {
    console.log(status);
    console.log(action);

    switch(action) {
        case 'U' :
            return status+1;
        case 'D' :
            return status-1;
        case 'R' :
            return 0;
    }

    return status;
}

export default function Red01() {

    const [data, setData] = useState(0);
    const [test, setTest] = useReducer(changeTest, 0); 
    //useReducer(함수명, 값) 값에 따라 배열, 수, 문자열이 바뀜. setTest를 하면 function을 호출하고 그 값을 넘겨준다.

    return(
        <div>
            <h1>useState</h1>
            {data}
            <input
            type='button'
            value='증가'
            onClick={e=>{
                setData(data+1)
            }} />
            <input
            type='button'
            value='감소'
            onClick={e=>{
                setData(data-1)
            }} /> <br/><br/>
            <h1>useReducer</h1>
            {test}

            <input
            type='button'
            value='증가'
            onClick={e=>{
                setTest('U');
            }}/>

            <input
            type='button'
            value='감소'
            onClick={e=>{
                setTest('D');
            }}/>

            <input
            type='button'
            value='초기화'
            onClick={e=>{
                setTest('R');
            }}/>
            
             <br/><br/>
        </div>
    )
}