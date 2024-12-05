export default function Study() {

    const [inputId, setUserId] = useState('');
    const [inputPw, setUserPw] = useState('');

    return(
        <div>
            <h1>Login</h1>
            <input 
            type="text"
            placeholder="ID"
            value={inputId}
            onChange={e=> {
                setUserId(e.target.value);
            }}
            /> <br/> <br/>
            <input 
            type="password"
            placeholder="PW"
            value={inputPw}
            onChange={e=> {
                setUserPw(e.target.value);
            }}
            /> <br/> <br/>
            <input 
            type="button"
            value='Login'
            onClick={userLogin} />
        </div>
        
    )
}