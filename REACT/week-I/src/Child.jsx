

import {useState} from 'react'

const Child = ({onSendData,parentData})=>{

    
    const [data,setData] = useState('')
    const handleInput = (value)=>{
        
        if(value.length){
            onSendData(value)
        }else{
            onSendData("")
        }
    }

    return(

        <>
       
        <h2>    
            <input type="text" onChange={(e)=>handleInput(e.target.value)}/>
            <button onClick={handleInput}>Submit</button>
        </h2>
        </>
    )
}

export default Child