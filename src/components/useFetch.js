import {useEffect, useState} from "react";

export function useFetch(url){
  const [data,setData] = useState(null);
  const [loading,setLoading] =useState(true)
  const [error,setError] = useState(null)

  useEffect (()=>{
    fetch(url)
    .then((res)=>{
        if(!res.ok) throw new Error("network response was not ok");
        return res.json();
    })
     
    .then((data)=>{
        setData(data);
        setLoading(false);
    })

    .catch((err)=>{
        setError(err);
        setLoading(false)
    })
  },[url])
  return {data, loading,error}
}