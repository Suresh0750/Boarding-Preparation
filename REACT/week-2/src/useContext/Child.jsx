import React,{useContext} from "react"
import {ThemContext} from './App'


const Child = ()=>{
    const {style} = useContext(ThemContext)

    return(
        <>
        <h2 style={style}>from Child component</h2>
        <p>value : {"value"}</p>
        </>
    )
}


export default Child;