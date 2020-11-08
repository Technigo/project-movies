import React from 'react';
import { Route, Link } from 'react-router-dom'


export const NotFound404 = () => {
    return (
        <div>
           <img 
                className="not-found-pic" 
                src="https://image.freepik.com/free-vector/404-error-with-cute-animal-concept-illustration_114360-1900.jpg" 
                alt="Page not found cat illustration"
            />
           <Route path="/"> 
                <Link to="/" className="back-link">
                    <i className="fa fa-chevron-circle-left"></i>
                    <span className="back-link-text">Back</span>
                </Link>
            </Route>
        </div>
    )
}