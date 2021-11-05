import React from "react"
import popcorn from "../images/popcorn.svg"

const Loading = () => {
    return (
        <div className="loading-overlay">
            <img className="loading-spinner" src={popcorn} alt="popcorn" />
        </div>
    )
}

export default Loading