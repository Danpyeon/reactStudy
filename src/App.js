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
