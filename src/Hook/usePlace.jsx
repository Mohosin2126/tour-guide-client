import { useEffect, useState } from "react";

const usePlace=()=>{
const[place,setPlace]=useState([])
const [loading,setLoading]=useState(true)
useEffect(()=>{
    fetch("../../public/data.json")
    .then(res=>res.json())
    .then(data=>{
       
        setPlace(data)
        setLoading(false)
    })
},[])
return [place,loading]
}
export default usePlace;