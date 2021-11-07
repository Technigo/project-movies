import React from "react"
import popcorn from "../images/popcorn.svg"

const Loading = () => {
    return (
        <div className="loadingOverlay">
            <img className="loadingSpinner" src={popcorn} alt="popcorn" />
        </div>
    )
}

export default Loading