import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function App() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [gender, setGender] = useState('');
  const [hobby, setHobby] = useState([]);
  const [bday1, setBday1] = useState('1990');
  const [bday2, setBday2] = useState('1');
  const [bday3, setBday3] = useState('1');

  const navigate  = useNavigate();

  const hobbyList = [
    {
      name: '게임'
    },
    {
      name: '운동'
    },
    {
      name: '음악'
    },
    {
      name: 'OTT'
    }
  ]

  function send() {
    localStorage.setItem('id', id);
    localStorage.setItem('pw', pw);
    localStorage.setItem('gender', gender);
    localStorage.setItem('hobby', hobby);
    localStorage.setItem('bday1', bday1);
    localStorage.setItem('bday2', bday2);
    localStorage.setItem('bday3', bday3);

    navigate('/view')
  }

  //성별 체크
  function changeGender(e) {
    setGender(e.target.value);
    console.log(gender);
  }

  //hobby 체크 확인하기
  function handleHobby(e) {
    //이미 체크가 되어있을 경우
    if(hobby.includes(e.target.value)) {
      //2. 1번에서 제외된 리스트를 다시 hobby에 저장.
      setHobby(
        //1. 체크된 결과값과 똑같은 값은 제외 처리
        hobby.filter(item => item !== e.target.value)
      )
    }
    //체크가 안 되어 있을 경우
    else {
      //마지막에 입력된 값을 추가 한다.
      setHobby([...hobby, e.target.value]);
    }
  }

  return (
    <div className="App">
      <h3>ID</h3> 
      <input
      type='text'
      value={id}
      placeholder='ID'
      onChange={
        (e) => (
          setId(e.target.value)
        )
      }/>
      <h3>PW</h3> 
      <input 
      type='password'
      value={pw}
      placeholder='PW'
      onChange={
        (e) => (
          setPw(e.target.value)
        )
      } />
      <h3>성별</h3>
      <input
      type='radio'
      name='gender'
      value='Male'
      onChange={
        e => changeGender(e)
      } /> 남성
      <input
      type='radio'
      name='gender'
      value='FeMale'
      onChange={
        e => changeGender(e)
      } /> 여성
      <h3>Hobby</h3>
      {hobbyList.map((item, index) =>  (
              <div key={index}>
                <input
                  type='checkbox'
                  value={item.name}
                  checked={hobby.includes(item.name)}
                  onChange={handleHobby}
                />{item.name}
              </div>
            ))

            }

      <h3>BirthDay</h3>
      <select onChange={
          e=> { setBday1(e.target.value) }
        }>
          <option value='1990'>1990</option>
          <option value='1991'>1991</option>
          <option value='1992'>1992</option>
          <option value='1993'>1993</option>
          <option value='1994'>1994</option>
          <option value='1995'>1995</option>
          <option value='1996'>1996</option>
          <option value='1997'>1997</option>
          <option value='1998'>1998</option>
          <option value='1999'>1999</option>
          <option value='2000'>2000</option>
          <option value='2001'>2001</option>
          <option value='2002'>2002</option>
          <option value='2003'>2003</option>
          <option value='2004'>2004</option>
          <option value='2005'>2005</option>
          <option value='2006'>2006</option>
          <option value='2007'>2007</option>
          <option value='2008'>2008</option>
          <option value='2009'>2009</option>
          <option value='2010'>2010</option>
      </select>년
      <select onChange={
          e=> { setBday2(e.target.value) }
        }>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
          <option value='6'>6</option>
          <option value='7'>7</option>
          <option value='8'>8</option>
          <option value='9'>9</option>
          <option value='10'>10</option>
          <option value='11'>11</option>
          <option value='12'>12</option>
      </select>월
      <select onChange={
          e=> { setBday3(e.target.value) }
        }>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
          <option value='6'>6</option>
          <option value='7'>7</option>
          <option value='8'>8</option>
          <option value='9'>9</option>
          <option value='10'>10</option>
          <option value='11'>11</option>
          <option value='12'>12</option>
          <option value='13'>13</option>
          <option value='14'>14</option>
          <option value='15'>15</option>
          <option value='16'>16</option>
          <option value='17'>17</option>
          <option value='18'>18</option>
          <option value='19'>19</option>
          <option value='20'>20</option>
          <option value='21'>21</option>
          <option value='22'>22</option>
          <option value='23'>23</option>
          <option value='24'>24</option>
          <option value='25'>25</option>
          <option value='26'>26</option>
          <option value='27'>27</option>
          <option value='28'>28</option>
          <option value='29'>29</option>
          <option value='30'>30</option>
          <option value='31'>31</option>
      </select>일
      <h3>회원가입</h3>
      <input
      type='button'
      value='Login'
      onClick={send} />
      <h3>초기화</h3>
      <input
      type='button'
      value='reset'
      onClick={
        () => {
          
        }
      } />
    </div>
  );
}

export default App;
