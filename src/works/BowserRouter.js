import React from 'react';
import { BrowserRouter,Route,Routes, Link,Navigate } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';

function App(){
    return (
        <BrowserRouter>
        <div>
            <h1>REACT ROUTER EXAMPLE</h1>

            <nav>
                <Link to="/">Home</Link>{""}|
                <Link to="/About">About</Link> {""}|
                <Link to="/Contact">Contact</Link>
            </nav>

            <Routes>
               <Route path='/'element={<Home/>}/>
               <Route path='/About' element={<About/>}/>
               <Route path='/Contact'element={<Contact/>}/>
            </Routes>
        </div>
        </BrowserRouter>
    )
}
export default App;
