import React from 'react'

import { Link } from 'react-router-dom'


export const ButtonBack = () => {

    return (
        <Link to="/" className="button-back">
            <div className="arrow">
            <p>v</p>
            </div>
            Movies
        </Link>
    )
}

