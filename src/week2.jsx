// import  logo from './logo.svg';
// import React from "react";
// import App from ",/App";
// import './App.css';
// import React from 'react';
// import { useEffect } from "react";
// import { createContext } from "react";
// import React, { useReducer } from 'react';

// const counterReducer=(state,action)=>{
//     switch (action.type){
//         case 'INCREMENT':
//         return {count: state.count+1};

//         case 'DECREMENT':
//         return {count:state.count-1};

//         default:
//         return state;

//     }
// };
// function Counter(){
//     const [state,dispatch]=useReducer(counterReducer,{count:0})
//     return(
//         <div>
//             <p>count: {state.count}</p>
//             <button onClick={()=>dispatch({type:'INCREMENT'})}></button>
//             <button onClick={()=>dispatch({type:'DECREMENT'})}></button>
//         </div>
//     )
// }
// export default Counter;

import logo from './logo.svg'
import './App.css';
import React from 'react';
import { createContext } from "react";
import React, { useReducer } from 'react';
import App from ",/week2";



// -----usereduce⛔-------
const counterReducer =(state,action)=>{
  switch (action.type){
  case 'INCREMENT':
    return {count: state.count +1};

    case 'DECREMENT':
      return {count: state.count-1}
       
      default :
      return state;
  }
};
function Counter(){
  const [state,dispatch]=useReducer(counterReducer,{count:0});
  return (
    <div>
      <p>count: {state.count}</p>
      <button onClick={()=>dispatch({type:'INCREMENT'})}>INCREMENT</button>
      <button onClick={()=>dispatch({type:'DECREMENT'})}>DECREMENT</button>
    </div>
  )
}
export default Counter;
 
// --------🚧---------
// const initialState ={
//   count:0,
//   name:"wafa",
//   age:18,
//   todos:["eat","sleep","game"]
// };
// function reducer(state,action){
//   switch (action.type){

//     case "INCREMENT":
//     return {...state,count: state.count + 1};

//   case "ADD_TODO":
//   return {...state, todos: [...state.todos, action.newTodo]};

//   case "CHANGE_NAME":
//   return {...state, name: action.newName};

//    default:
//    return state;
//   }
// };
// function App(){

//   const [state,dispatch]=useReducer(reducer,initialState);
//   return (
//     <div>
//       <p> count:{state.count}</p>
//       <p>name:{state.name}</p>
//       <p>age:{state.age}</p>
//       <p>todos:{state.todos.join(", ")}
//       </p>

//       <button onClick={()=> dispatch({type:"INCREMENT"})}>count inc</button>
//       <button onClick={()=> dispatch({type:"CHANGE_NAME",newName:"fathima"})}>change name</button>
//       <button onClick={()=>dispatch({type:"ADD_TODO",newTodo:"repeat♻️",})}>add todo</button>
//     </div>
//   )
// }
// export default App;


// -------⛔usecontext-------

// export const SchoolContext =createContext()
// import SchoolContext from "/.SchoolContext";

// function App(){
//     return (
//         <SchoolContext.Provider value={{message:"tomorrow term exam will start!🛑"}}>
//             <Classroom/>
//         </SchoolContext.Provider>
//     );
// }
// import { useContext } from "react";
// import {SchoolContext} from "./SchoolContext";

// function Classroom(){
//     const data = useContext(SchoolContext);
//     return <h1>{data.message}</h1>
// }


