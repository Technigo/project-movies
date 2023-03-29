import React from 'react'
import { useNavigate } from 'react-router-dom'// initialized with useNavigate

const NotFound = () => {
  const navigator = useNavigate()
  const toDefaultnav = () => { // navigates to the original from default page when given -1
    navigator(-1)
  }
  return (
    <div>
      Route does not exist.
      <button className="button" type="button" onClick={toDefaultnav}>BUTTON</button>
    </div>
  )
}
export default NotFound;
