import { useState } from 'react'

function App() {
  
    const[sth,setSth] = useState({
        name:"",
        age:"",
        hobby:""
    })
  
    const {name , age, hobby} = sth
    return (
    <div>
        <button onClick={()=>setSth({...sth,name:"pawko",age:38,hobby:"boxing"})}>click</button>
        <span>{name}{age}{hobby}</span>
    </div>
  )
}

export default App