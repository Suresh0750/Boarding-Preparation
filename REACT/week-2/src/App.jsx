

import {useState,useEffect,useMemo,useCallback} from 'react'
import List from './List'

function App(){

  const [num, numFun] = useState(0)
  const [dark, darkFun] = useState(false)
  console.log(num)


  // # here we asign function to the variable so we can't use useMemo

  // Advantage of useCallback .
  // useCallback have ability to return the function  


  // text 1
  // const getItem = useMemo(()=>{
  
  //   console.log('hi')
  //   return [num+1,num+2,num+3]
  
// },[num])



// using useCallback we can get the value from where it call
  const getItem = useCallback((value)=>{
  
      console.log('hi')
      console.log(num,value)
      return [num+1+value,num+2+value,num+3+value]
    
  },[num])
  const style = useMemo(()=>{
    console.log('hellow')
    return {
      backgroundColor : dark? 'white' : 'black',
      color : dark? 'black' : 'white'
    }
  },[dark])
  return (
   <div style={style}>
      <input type='text' onChange={(e)=>numFun(parseInt(e.target.value))}/> &nbsp; <button onClick={()=>darkFun((curr)=> !curr)}>Toggle theme</button>
      <List getItem ={getItem}/>
   </div>
  )

}


export default App