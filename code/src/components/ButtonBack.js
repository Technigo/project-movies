import React from 'react'

import { Link } from 'react-router-dom'

import { Back } from './Back'


export const ButtonBack = () => {

    return (
        <Link to="/" className="button-back">
                <Back />
            Movies
        </Link>
    )
}

