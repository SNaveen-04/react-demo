import { useState,useEffect } from "react"
const Class = () => {
    console.log('render-----');
    const [state,setState] = useState(0);
    useEffect(()=>{
        console.log('didmount')
        return () =>{
            console.log('unmount')
        }
    },[])
    useEffect(()=>{
        console.log('didupdate');
    },[state])
  return (
    <div>
    <button onClick={()=>setState(prev => prev+1)}>{state}</button>
    </div>
  )
}

export default Class