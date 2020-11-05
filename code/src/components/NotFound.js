import React from 'react'
import { Link } from 'react-router-dom'


export const NotFound = () => {

    return (
        <div className="container">
        <div className="background">
          

            <div className="not-found">

                <div className="not-text">404: Page Not Found</div>
                </div></div>
                
                <Link to="/">
                    <button className="button">Back to home page</button>

                </Link>
                
            </div>
    
    )
}

