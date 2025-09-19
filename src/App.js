import  logo from './logo.svg';
 import React, { createContext } from "react";
// import App from ",/App";
//  import './App.css';
// import React from 'react';

// import axios from "axios";

// axios.get('https://jsonplaceholder.typicode.com/users')
// .then((response)=>{
//     console.log(response.data)
// })
// .catch((error)=>{
//     console.error("error:",error)
// });

// axios.post('https://jsonplaceholder.typicode.com/users',{
//     title:"new post",
//     body:"this is my post",
//     userId:1
// })
// .then((response)=>{
//     console.log(response)
// })
// .catch((error)=>{
//     console.error("error",error)
// });

// ------useContext⛔----

// import { useState } from 'react';
// import SchoolContext from "./SchoolContext";
// import Student from "/.Student";

// function App(){
//     const [schoolName,setSchoolname]=useState("abc school")
//     return(
//             <SchoolContext.Provider value={{schoolName,setSchoolName}}>
//             <div>
//             <h2>App component</h2>
//             <Student/>
//             </div>
//             </SchoolContext.Provider>
//     );
// }
// export default App();

// import { useContext } from 'react';
// import schoolContext from './schoolContext';

// function Stundent(){
//     const {schoolName,setSchoolName}=useContext(schoolContext);
//     return (
//         <div>
//             <h1>school component</h1>
//             <p>school:{schoolName}</p>
//             <button onClick={()=>schoolName("jojo school")}>change school</button>
//         </div>
//     )
// }
// export default Stundent;

// --------cstm hook⛔----------
// import useFetch from "./useFetch";
// function App(){
//     const {data,loading}=useFetch('linkk')
//      if (loading){
//         <p>loading...</p>
//      }
//      return (
//         <ul>
//             {data.map(post=><li key={post.id}>{post.title}</li>)}
//         </ul>
//      )
// }
// export default App;


// import useLocalStorage from "./useLocalStorage";

// function App(){
//     const [name,setName]=useLocalStorage("name"," ")
//     return (
//         <div>
//             <input
//             value={name}
//             onChange={(e)=>setName(e.target.value)}
//             placeholder='enter here...'
//             />
//             <p>stored name{name}</p>
//         </div>
//     )
// }
// export default App;

// ---------lazy suspence⛔--------

// import {lazy , Suspence, useState} from "react";

// const Hello= lazy(()=>import ("./Hello"));
// function App(){
//     const [show,setShow] = useState(false)

//     return (
//         <div>
//             <h1>it's loaded.</h1>
//             <button onClick={()=>setShow(ture)}>load hello</button>
//             {show &&(
//                 <Suspence fallback={<p>loading...</p>}>
//                    <hello/>
//                 </Suspence>
//             )}
//         </div>
//     )
// }
// export default App;

