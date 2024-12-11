import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import Calc1 from './comp/calc/study01'
import Inp1 from './comp/inp/input01'
import Out1 from './comp/inp/output01'
import Login from './comp/login/login'
import View from './comp/login/viewLogin'
import Ax1 from './comp/ax/ax01'
import Ref from './comp/inp/ref01'
import Join1 from './comp/login2/join'
import Login1 from './comp/login2/login2'
import ProItemList from './comp/login2/ItemList'
import BoardLogin1 from './comp/board/board_login'
import BoardMain from './comp/board/board_main'
import BoardRegist from './comp/board/board_regist'
import BoardView from './comp/board/board_view'
import BoardModify from './comp/board/board_modify'
import Red01 from './comp/red/Red01'
import Red02 from './comp/red/Red02'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <About />
        <Routes>
          <Route path={"/"} element={<Home/>} />
          <Route path={"/about"} element={<About />} />
          <Route path={"/calc1"} element={<Calc1 />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/view"} element={<View />} /> 
          <Route path={"/inp1"} element={<Inp1 />} />
          <Route path={"/out1"} element={<Out1 />} />
          <Route path={"/ref1"} element={<Ref />} />
          <Route path={"/ax1"} element={<Ax1 />} />
          <Route path={"/join1"} element={<Join1 />} />
          <Route path={"/login1"} element={<Login1 />} />
          <Route path={"/itemList"} element={<ProItemList />} />
          <Route path={"/boardLogin"} element={<BoardLogin1 />} />
          <Route path={"/boardMain"} element={<BoardMain />} />
          <Route path={"/boardRegist"} element={<BoardRegist />} />
          <Route path={"/boardView"} element={<BoardView />} />
          <Route path={"/boardModify"} element={<BoardModify />} />
          <Route path={"/red01"} element={<Red01 />} />
          <Route path={"/red02"} element={<Red02 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Home() {
  return(
    <div>
      <h1>Start Home</h1>
      <Link to="/about">Move to About</Link> <br/>
      <Link to="/calc1">Move to Calc1</Link> <br/>
      <Link to="/login">Move to Login</Link> <br/>
      <h4>데이터 옮기기</h4>
      <Link to="/inp1">데이터 입력</Link> <br/>
      <Link to="/out1">데이터 출력</Link>

      <h4>Axios</h4>
      <Link to="/ax1">Axios 사용</Link> <br />
      <Link to="/ref1">Ref 사용</Link> <br />
      <Link to="/join1">회원가입</Link> <br />
      <Link to="/login1">로그인하기</Link> <br />
      <Link to="/itemList">Item List</Link> <br />

      <h4>Board</h4>
      <Link to="/boardLogin">게시판 로그인</Link> <br />

      <h4>Red</h4>
      <Link to="red01">Reducer 01</Link><br />
      <Link to="red02">Reducer 02</Link>
    </div>
  )
}

function About() {
  return(
    <div style={{border: '2px solid black'}}>
      <Link to="/">Move to Home</Link>
    </div>
  )
}

export default App;
