

import React,{createContext, useMemo} from "react"
import MiddleChild from "./MiddleChild"


export const ThemContext = createContext()
const App = ()=>{

    const style = {
        backgroundColor : 'black',
        color : 'white'
    }
    return(
        <ThemContext.Provider value={{style}}>
            <h2>Lear use context</h2>
            <MiddleChild/>
        </ThemContext.Provider>
    )
}

export default App