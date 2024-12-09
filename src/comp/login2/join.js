import { useEffect, useRef, useState } from "react";
import {memberIdCehck, areaList, memberRegist} from '../api/member';
import { useNavigate } from "react-router-dom";

function Study() {

    const [userId, setId] = useState('');
    const [userPw, setPw] = useState('');
    const [userName, setName] = useState('');
    const [userMail, setMail] = useState('');
    const [userGender, setGender] = useState('M');
    const [userBirth, setBirth] = useState('');
    const [area, setArea] = useState(''); //지역 값
    const [aList, setAlist] = useState([]); //지역 리스트

    const [idChk, setIdc] = useState('') //아이디 중복체크

    const idRef = useRef();

    
    const navigate = useNavigate();




     /**
     * 로그인
     */
    // function userLogin() {
    //     console.log('===User Login===')

    //     let obj = new Object;
    //     obj.userId = inputId;
    //     obj.userPw = inputPw;

    //     const checkuser = memberLogin(obj);

    //     checkuser.then(res => {
    //         console.log(res)
    //         if(res.data.code === '200' && res.data.data === 'Y') {
    //             console.log('로그인 성공');
    //             navigate('/'); //메인화면으로 보내버림
    //         } 
    //     })
    // }

     /**
     * 지역코드
     */

    useEffect(() => {
        getAreaList();
    }, []);

    function getAreaList() {
        console.log('===AreaList===')
        areaList()
        .then(res => {
            console.log(res);
            setAlist(res.data.data); //select 지역 리스트 추가
            setArea(res.data.data[0].idx); //지역코드 기본값 (첫 index)
        })
    }

    /**
     * 회원가입
     */
    function joinAction() {

        if(userId.trim().length == 0 || userId !== idChk) {
            alert('아이디 확인을 해주세요');
            return;
        }

        //유효성 검사
        const obj = {
            'userId': userId,
            'userPw': userPw,
            'userName': userName,
            'email': userMail,
            'birth': userBirth,
            'gender': userGender,
            'areaIdx': area,
        }

        console.log(obj);
        memberRegist(obj)
        .then(res => {
            alert('로그인 성공')
            window.history.back();
        })
        .catch(err => {
            console.log(`err : ${err}`);
        })
    }

    return(
        <div className="App">

            <h1>중복체크</h1>

            <input type="text"
            placeholder="ID" 
            ref={idRef}
            value={userId}
            onChange={
                e=>  {
                    setId(e.target.value);
                }
            }/>

            <input type="button" value='중복 체크' onClick={
                () => {
                    let obj = new Object();
                    obj.id = userId;

                    const check = memberIdCehck(obj);

                    //성공
                    check.then(res => {
                        console.log('===Good===')
                        console.log(res);
                        setIdc(userId);
                        idRef.current.disabled = true;
                    })

                    //실패
                    check.catch(err => {
                        console.log(err);
                    })
                }
            } /> <br/><br/>


            <input type='password' placeholder="PASSWORD" 
            value={userPw}
            onChange={
                e=> setPw(e.target.value)
            }/> <br/><br/>
            <input type='text' placeholder="NAME" 
            value={userName} 
            onChange={
                e=> setName(e.target.value)
            }/> <br/><br/>
            <input type='email' placeholder="EMAIL" 
            value={userMail} 
            onChange={
                e=> setMail(e.target.value)
            }/> <br/><br/>
            <input type="radio" value="M" name="gender" 
            onChange={ e=> {
                setGender(e.target.value)
            }}
            checked/>남자
            <input type="radio" value="F" name="gender" 
            onChange={ e=> {
                setGender(e.target.value)
            }}/>여자 <br/><br/>
            생년원일 <input type="date" 
            value={userBirth}
            onChange={ e=> setBirth(e.target.value)}/> <br/><br/>

            지역코드
            <select onChange={e=>setArea(e.target.value)}>
                {aList.map((item, index) => (
                    <option key={index} value={item.idx}>
                        {item.areaName} / {index}
                    </option>
                ))}
            </select> <br/><br/>

            <input type="button" 
            value='회원가입' 
            onClick={joinAction}/>
            <br/> <br/>
            <input type="button" 
            value='로그인' 
            onClick={() => {
                navigate('/login1');
            }}/>

            <hr></hr>

            
        </div>
    );
}

export default Study;