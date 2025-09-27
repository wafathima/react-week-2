import {useEffect, useState} from "react"
import {
    getUsers,
    createUser,
    updateUser,
    deleteUser,
} from "../services/userService";
import UserForm from "../components/userForm";

function Users(){
    const [users,setUsers]=useState([]);
    const [editUser, setEditUser] = useState(null);

    const fetchUsers=  async()=>{
        const response= await getUsers();
        setUsers(response.data);
    };
    useEffect(()=>{
        fetchUsers();
    },[]);

    const handleCreate= async (user)=>{
        await createUser (user);
        fetchUsers();
    };

    const handleUpdate = async(user)=>{
        await updateUser(editUser.id,user);
        setEditUser(null);
        fetchUsers();
    };
    const handleDelete =async(id)=>{
        await deleteUser(id);
        fetchUsers();
    };
    return (
        <div>
            <h2>user managment</h2>
            <UserForm 
            onSubmit={editUser? handleUpdate:handleCreate}
            initialData={editUser}
            />

            <ul>
                {users.map((u)=>(
                   <li key={u.id}>
                    {u.name}({u.email}){" "}
               <button onClick={()=> setEditUser(u)}>edit</button>
               <button onClick={()=>handleDelete(u.id)}>delete</button>
                   </li>
                ))}
            </ul>
        </div>
    );
}
export default Users;