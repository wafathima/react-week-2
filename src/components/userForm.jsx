import {useState} from "react";
function UserForm({onSubmit,initialData}){
    const [form,setForm]=useState(initialData || {name:"",email:""});

    const handleChange=(e)=>{
        setForm({...form,[e.target.name]: e.target.value});
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        onSubmit(form);
        setForm({name:"", email:""});
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="name "
            required
            />
            <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="email"
            required
            />
        <button type="submit">save</button>
        </form>
    )
}
export default UserForm;