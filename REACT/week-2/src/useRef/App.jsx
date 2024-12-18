
import React,{useRef, useState} from 'react'


const App = ()=>{
    const [state,setState] = useState(0)
    const intervalRef = useRef(null)
    const startInterval = ()=>{
        intervalRef.current = setInterval(()=>{   // * here intervalRef.current store the interval ID it can be clear later
            setState((val)=>val+1)
        },1000)
    }
    const stopInterval = ()=>{
        clearInterval(intervalRef.current)
        intervalRef.current =null   
    }
    return(
            <> 
                <h2>{state}</h2>
                <button onClick={startInterval}>start</button>
                <button onClick={stopInterval}>stop</button>
            </>
 )
}   

export default App;