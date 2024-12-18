

import {useState,useEffect} from 'react'

function List({getItem}){

    // console.log(getItem)

    const [item,setItem] = useState([])


    useEffect(()=>{
        console.log('child renders  ')
        setItem(getItem(10))
    },[getItem])

   

    return (
        <ul>
       

            {item.map((item,i)=>{
            return<li key={i}>{item}</li>
           })} 

           
        </ul>
    )
}


export default List