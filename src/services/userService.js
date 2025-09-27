import api from "../api/axios";
export const getUser=()=> api.get("/users");

export const getUserById=(id)=>api.get(`/user/${id}`);

export const createUser=(user)=> api.post("/users",user);

export const updateUser=(id,user)=>api.put(`/users/${id}`,user);

export const deleteUser=(id)=>api.delete(`/users/${id}`)