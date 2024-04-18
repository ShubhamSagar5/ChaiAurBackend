
import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'


function App() {

  const [jokes,setJokes] = useState([])

  const makeReq = async()=>{
      const result = await axios.get('http://localhost:3000/api/joke')
      console.log(result)
      setJokes(result.data)
  }

  useEffect(()=>{
    makeReq()
  },[])

  return (
    <div>
      <div>
        <h2>Jokes </h2>
        <h3>Total jokes : {jokes.length}</h3>
        {
          jokes?.map((jok,index)=>(
            <div key={jok.id}>
                <p>{jok.message}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default App
