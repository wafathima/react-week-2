import {useState, useEffect} from 'react';

function App(){
    const [count,setCount]=useState(0)
    useEffect(()=>{
        console.log("Component rendered or count changed")
    },[count]);
    return (
        <div>
            <h1>count: {count}</h1>
            <button onClick={()=>setCount(count+1)}>high</button>
        </div>
    )
}
export default App;