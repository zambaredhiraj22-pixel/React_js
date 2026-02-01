import { useEffect } from "react";

const Counter = ({count,data})=>{

    const handleCounter=()=>{
    console.log("handleCounter called");

}

 const handleData=()=>{
    console.log("handleData called");

 }

 useEffect(()=>{
    handleCounter();

 },[])

 useEffect(()=>{
    handleData()
 },[data])

}