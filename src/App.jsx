import logo from './logo.svg';
import './App.css';
import { useReducer, useState } from 'react';
import React from 'react';

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


import Users from "./pages/Users";
function App(){
    return (
        <div>
            <h1> CRUD Example</h1>
            <Users/>
        </div>
    )
}
export default App;

