function reducer(state,action){
  switch  (action.type){
     case 'INCREMENT':
      return {count: state.count +2}

      case 'DECREMENT':
        return {count: state.count -2}

        default:
          return state;
  }
}
function App(){
  const [state,dispatch]=useReducer(reducer,{count:0})

  return (
    <div>
     <h1>COUNT</h1>
     <p>Count:{state.count}</p>
     <button onClick={()=>dispatch({type:"INCREMENT"})}> TAP + </button>
     <button onClick={()=> dispatch({type:"DECREMENT"})}>TAP -</button>
    </div>
  )
} 
export default App;