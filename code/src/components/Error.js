import React from 'react'; 
import { Link } from 'react-router-dom';
import './Error.css'

export const Error = () => {
    return (
        <section className="error">
            <Link to="/" exact="true">
            <div className="back-arrow">
                    
                    <p classname="error-animation">
                    <i class="arrow left"></i>
                        Back to movies
                        </p>
                    </div>
            </Link>
            <h1 className="error-text">Sorry, we could not find the movie you were looking for!</h1>
        </section>
    )
}