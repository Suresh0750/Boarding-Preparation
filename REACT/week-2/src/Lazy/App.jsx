

import React,{Suspense} from "react"
const Child = React.lazy(()=>import('./Child'))

const App = ()=>{

 return(
    <>
        <h1>Learn Ract Lacy</h1>
        <Suspense fallback='Loading...'>
            <Child />
        </Suspense>
    </>
 )

}


export default App