import React from "react"
import "../css/Loader.css"

import filmroll2 from "../images/filmroll2.png"
import camera2 from "../images/camera2.png"

const Loader = () => {
    return (
        <div className="loader-overlay">
            <div className="loader-container">
                <div className="filmrolls">
                    <img className="filmroll" src={filmroll2} alt="film roll" />
                    <img className="filmroll" src={filmroll2} alt="film roll" />
                </div>
                <img className="camera" src={camera2} alt="camera" />
            </div>
        </div>
      
    )
}

export default Loader