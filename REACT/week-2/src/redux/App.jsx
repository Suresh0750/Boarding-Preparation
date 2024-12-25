
import {useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'



function App(){

    const count = useSelector((state)=>state.count)
    const dispatch = useDispatch()
    const style = {
        cursor :'pointer'
    }
    return(
        <div>
            <h2>{count}</h2>
            <button style={style} onClick={dispatch({type:'Increment'})}>Inc</button> 
            <button style={style} onClick={dispatch({type:'Decrement'})}>dec</button> 
        </div>
    )
}

export default App