import  React from 'react'
import { useNavigate } from 'react-router-dom'




export const NotFound =()=>{
const navigate = useNavigate()
const onButtonClick = () => {
    navigate (-1)}
 return (<div><h1 className="notfound">Sorry, no movie was found</h1>

 <button className= "notfound-button" onClick={onButtonClick}> ⇦ Movies</button></div>)
}