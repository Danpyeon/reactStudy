import { useEffect, useState } from "react";
import {memberIdCehck, areaList} from '../api/member';

function Study() {

    const [userId, setId] = useState('');
    const [aList, setAlist] = useState([]);

    
    useEffect(() => {
        getAreaList();
    }, []);

    function getAreaList() {
        console.log('===AreaList===')
        areaList()
        .then(res => {
            console.log(res);
            setAlist(res.data.data);
        })
    }

    return(
        <div className="App">

            <h1>중복체크</h1>

            <input type="text"
            placeholder="ID" 
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
                    })

                    //실패
                    check.catch(err => {
                        console.log(err);
                    })
                }
            } /> <br/><br/>
            <select>
                {aList.map((item, index) => (
                    <option key={index} value={item.idx}>
                        {item.areaName} / {index}
                    </option>
                ))}
            </select>
            
        </div>
    );
}

export default Study;