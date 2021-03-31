import React from 'react'
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"


const Loading =()=>{
  return (
    <div>
      <Loader 
        type="Audio" 
        color="red" 
        height={200} 
        width={200}
        className="loader"
      />
    </div>
  )
}

export default Loading;