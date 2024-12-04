import { useEffect, useState } from "react";

export default function ViewLogin() {

    const id = localStorage.getItem('id');
    const pw = localStorage.getItem('pw');
    const gender = localStorage.getItem('gender');
    const hobby = localStorage.getItem('hobby');
    const bday1 = localStorage.getItem('bday1');
    const bday2 = localStorage.getItem('bday2');
    const bday3 = localStorage.getItem('bday3');

    return(
        <div>
            <h1>ID : {id}</h1>
            <h1>PW : {pw}</h1>
            <h1>GENDER : {gender}</h1>
            <h1>HOBBY : {hobby}</h1>
            <h1>B_YEAR : {bday1}</h1>
            <h1>B_MONTH : {bday2}</h1>
            <h1>B_DAY : {bday3}</h1>
        </div>
    )
}