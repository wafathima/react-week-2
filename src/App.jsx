import logo from './logo.svg';
import './App.css';
import { useReducer, useState } from 'react';
import React from 'react';
import {useEffect} from 'react';

// --------------⛔---------
// import AppContext from './components/AppContext';
// import Child from './components/Child';
// function App(){
//     const [user,setUser]=useState("wafa")
//     return (
//         <div>
//             <AppContext.Provider value={{user,setUser}}>
//             <h1>App Component</h1>
//             <p>app in user: { user}</p>
//             <Child/>
//           </AppContext.Provider>
//         </div>
//     )
// }
// export default App;



// -----------⛔-----------
// import {useFetch} from "./components/useFetch";

// function App(){
//   const {data,loading,error}=useFetch(
//     "https://jsonplaceholder.typicode.com/todos"
//   );
//   if(loading) return <p>loading...</p>
//   if(error) return <p>error: {error.message}</p>

//   return (
//     <ul>
//       {data.map((user)=>(
//         <li key={user.id}>{user.title}</li>
//       ))}
//     </ul>
//   )
// }
// export default App;
// ----------⛔----------
// import { useLocalStorage } from './components/useLocalStorage';

// function App(){
//   const [name,setName]=useLocalStorage("username","john");

//   return (
//     <div>
//       <h1>hello,{name}</h1>
//       <input
//       value={name}
//       onChange={(e)=>setName(e.target.value)}
//       placeholder='enter name...'
//       />
//     </div>
//   )
// }
// export default App;
// ----------⛔---------


// import Users from "./pages/Users";
// function App(){
//     return (
//         <div>
//             <h1> CRUD Example</h1>
//             <Users/>
//         </div>
//     )
// }
// export default App;

import { BrowserRouter,Routes,Route,Link, Navigate } from 'react-router-dom';
import About from "./components/About"
import Home from "./components/Home"
function App(){
    return (
        <BrowserRouter>
        <div>
            <nav>
                <Link to="/">About</Link>{""}|
                <Link to="/Home">Home</Link>
            </nav>

            <Routes>
                <Route path='/' element={<About/>}/>
                <Route path='Home' element={<Home/>}/>
            </Routes>
        </div>
        </BrowserRouter>
    )
}
export default App;
   