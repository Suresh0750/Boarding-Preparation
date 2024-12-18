import React,{useReducer} from "react"

const App = ()=>{

    const initialValue = {count:0}

    function reducer(state,action){
        switch(action.type){
            case "Increment":
                return {count:state.count+1}
            case "Decrement":
                return {count:state.count-1}
            case "Multiply":
                return {count:state.count*2}
            default :
                return {count:0}
        }
    }
    const [state,dispatch] = useReducer(reducer,initialValue)
    return(
        <>
        <h2>{state.count}</h2>
        <button onClick={()=>dispatch({type:"Increment"})}>Increment</button>
        <button onClick={()=>dispatch({type:"Decrement"})}>Decrement</button>
        <button onClick={()=>dispatch({type:"Multiply"})}>Multiply</button>
        <button onClick={()=>dispatch({type:"Reset"})}>Reset</button>
        </>
    )
}

export default App;