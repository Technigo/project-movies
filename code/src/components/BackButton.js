import React from 'react'
import { Link } from 'react-router-dom';
import BackIcon from './BackIcon';

const BackButton=() => {
    return (
            <Link to="/" className="back-button" >
                Back to overview
            </Link>
    )
}


export default BackButton

