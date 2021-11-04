import React from "react"
import './ErrorMessage.css'


const ErrorMessage = ({ error }) => {
    return (
        <div>
            {error && <div className="error-wrapper"><p className="error-message">Oh no, {error}</p></div>
            }
        </div>
    )
}

export default ErrorMessage