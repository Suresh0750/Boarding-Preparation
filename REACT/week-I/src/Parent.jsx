
import {useState} from 'react'

import Child from './Child'

const Parent = ()=>{

    
    const [data,setData] = useState('')
    const [parentData,setParentData] = useState('')

    return(
        <>
        <h2>From Child Data : {data}</h2>
        <Child  onSendData={setData} parentData />
        <input  type='text' value={parentData} onChange={setParentData} />
        <button>Submit</button>
        </>
    )
}

export default Parent