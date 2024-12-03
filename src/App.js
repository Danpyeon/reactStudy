import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import Calc1 from './comp/calc/study01'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <About />
        <Routes>
          <Route path={"/"} element={<Home/>} />
          <Route path={"/about"} element={<About />} />
          <Route path={"/calc1"} element={<Calc1 />} />
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
      <Link to="/calc1">Move to Calc1</Link>
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
