import React from 'react'
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"


const Loading =()=>{
  return (
    <div>
      <Loader 
        type="Rings" 
        color="#00BFFF" 
        height={80} 
        width={80} 
      />
    </div>
  )
}

export default Loadg;