// import { useState } from 'react'

// function App() {
  
//     const[sth,setSth] = useState({
//         name:"",
//         age:"",
//         hobby:""
//     })
  
//     const {name , age, hobby} = sth
//     return (
//     <div>
//         <button onClick={()=>setSth({...sth,name:"pawko",age:38,hobby:"boxing"})}>click</button>
//         <span>{name}{age}{hobby}</span>
//     </div>
//   )
// }

// export default App


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// import { useState, useEffect } from 'react'
// import axios from 'axios'

// function App() {
  
//     const urls = 'https://api.github.com/users';
//     const [users,setUsers] = useState([])
//     //const [flag,setFlag] = useState(false)



//     useEffect(()=>{
      
//             const aaaa = async () => {
            
//             const response = await axios.get(urls)
//             const users = response.data
//             const users2= users.json()


//             setUsers({users2})}
            
//              aaaa()
//     },[])
//     console.log(users)
  
    
//     return (
//     <div>
//         {users.map((user) => {
//            const { login, type, url, id } = user
//            console.log(user)
//            return (
//         <li key={id}> 
             
//             <span>{login}</span>
//             <span>{type}</span>
//             <span>{url}</span>
//         </li>
//         )}
//         )}
//     </div>
//   )
// }

// export default App



// import { useState, useEffect } from 'react'




// function App() {
    
    
//     const [stan, setStan] = useState(false)

//     useEffect(()=>{ 
        
        

//     },[stan])
   
  
    
//     return (
//     <div>
//         <button onClick={()=>setStan(!stan)}>click</button>
//         {stan ? <div>ON</div> : <div>OFF</div>}
//         { stan && <div>jest dodatni</div>}

//     </div>
//   )
// }

// export default App


import { useState } from 'react'
import { data } from './data.js'

function App() {
    
    
    const [stan, setStan] = useState(data)
    const [nowyStan, setNowyStan] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault()
        const newValue = {id: 55, nowyStan}
        const updatedUsers = [...stan, newValue]
        setStan(updatedUsers)

    }

    return (
    <form onSubmit={handleSubmit} 
    style={{
        width:"100vw",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center"
        }}      >
        <label htmlFor="forName">please enter your name</label>
        <input type="text" id='forName' value={nowyStan} onChange={(e) => setNowyStan(e.target.value)} />
        {data.map((element) => {
            return(
            <div key={element.id}>
                {element.name}
            </div>
        )}) }
        <button type='submit'>submit</button>
    </form>
  )
}

export default App