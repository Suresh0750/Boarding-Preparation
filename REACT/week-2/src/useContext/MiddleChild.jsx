

import React,{useContext,createContext} from "react";
import Child from "./Child";
export const MiddleChildContext = createContext()


const MiddleChild = ()=>{
    const value = 'hello'
    return(
        <MiddleChildContext.Provider value={value} >
            <Child />
        </MiddleChildContext.Provider>
    )
}

export default MiddleChild