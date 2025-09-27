import {useContext} from 'react';
import AppContext from './AppContext';

function Child(){
    const {user,setUser}=useContext(AppContext)

    return (
        <div>
            <h2>child component</h2>
            <p>user in context: {user}</p>
            <button onClick={()=>setUser("aliya")}>change user</button>
        </div>
    )
}
export default Child;

