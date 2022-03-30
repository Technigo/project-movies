import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () =>{
    return(
        <div>
            <Link to="/"><button>Back to main page</button></Link>
            <h1>Sorry this movie does not exist</h1>
        </div>
    )
}