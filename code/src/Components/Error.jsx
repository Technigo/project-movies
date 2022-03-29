import React from "react";
import error from '../assets/error.png'
import { Link } from "react-router-dom";

const Error = () => {
    return(
        <div className="error">
            <Link to="/">
                <img className="error-image" src={error} alt="circle with x inside"></img>
            </Link>
            <p>Movie not found!</p>
            <p>Click icon to go back.</p>
        </div>
    )
}

export default Error