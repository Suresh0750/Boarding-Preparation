
import React,{useCallback, useEffect, useState}from "react"




const App = ()=>{
    const [nums,setNums] = useState(0)
    const [color,setColor] = useState(false)
    const getItem = useCallback((value)=>{
        return [nums+value+1,nums+value+2,nums+value+3]
    },[nums])
    const style = {
        backgroundColor: color ? 'black' : 'white',
        color: !color ? 'black' : 'white'
    }
    return(
        <div style={style}>
            <input type="number" onChange={(e)=>setNums(Number(e.target.value))}/> &nbsp;<button onClick={()=>setColor((value)=>!value)}>Toggle</button>   
            <ChildComponet getItem={getItem}/>
        </div>
    )
}

export const ChildComponet = React.memo(({getItem})=>{
    const [items,setItems] = useState([])
    useEffect(()=>{
        console.log('component rerenders')
        setItems(getItem(10))
    },[getItem])
    return(
    <>
        {items.map((value,i)=>{
            return<p key={i}>{value}</p>
        })}
    </>
    )
})



export default App