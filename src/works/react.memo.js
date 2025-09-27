// import React from 'react';
// const Child = React.memo(({count})=>{
//     console.log("child re-rendered")
//     return <h1>Child count: {count}</h1>
// })

// function App(){
//     const[count,setCount]=useState(0)
//     const [text,setText]=useState("")
//      return(
//         <div>
//             <Child count={count}/>
//             <button onClick={()=>setCount(count+1)}>click</button>
//             <input value={text} onChange={(e)=>setText(e.target.value)}/>
//         </div>
//      )
// }
// export default App;

// ----------⛔---------

// import { useMemo} from "react";
// function App(){
//   const [count,setCount] = useState(0);
//   const [text, setText]= useState("")

//   const expensiveCalculation = (num)=>{
//     console.log("calculating...")
//     return num*2
//   };

//   const result = useMemo(()=>expensiveCalculation(count),[count]);

//   return (
//     <div>
//       <h1>result : {result}</h1>
//       <button onClick={()=> setCount(count+1)}>increment</button>
//       <input value={text} onChange={(e)=>setText(e.target.value)}/>
//     </div>
//   )
// }
// export default App;

// ------⛔----------
// import {useCallback} from 'react';
// import React from 'react';

// const Child= React.memo(({onClick})=>{
//     console.log("child rendered")
//  return <button onClick={onClick}>child click</button>
// })

// function App(){
//     const [count,setCount]=useState(0)
//     const handleClick = useCallback(()=>{
//         console.log("child button Clicked")
//     },[])
//     return (
//         <div>
//             <h1>count: {count}</h1>
//             <button onClick={()=>setCount(count+1)}>increment</button>
//             <Child onClick={handleClick}/>
//         </div>
//     )
// }
// export default App;




