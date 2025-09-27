import { useState} from "react";
import { useContext } from 'react';

function Counter (){
  const [count,setCount]=useState(0)
   return (
    <div>
      <h1>count🚀</h1>
      <p>count: {count}</p>
      <button onClick={()=>setCount(count+1)}>⬆️</button>
      <button onClick={()=>setCount(count-1)}>⬇️</button>
    </div>
   )
}
export default Counter;