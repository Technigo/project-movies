import React, {useState, useEffect} from 'react'
import { API_KEY } from 'ultils/API_KEY'

export const App = () => {

  const [list,setList] = useState([])

  useEffect(() => {
    fetch(API_KEY)
    .then(res => res.json())
    .then(data => setList(data.results))
  },[])  
  console.log(list)

  return (
    <div>
      Find me in src/app.js!
    </div>
  )
}
