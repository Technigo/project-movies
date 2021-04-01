import React from 'react'
import { Link } from "react-router-dom"

import { FaChevronCircleLeft } from 'react-icons/fa';

import './PageNotFound.css'

export const PageNotFound = () => {
    return (
    <>
        <Link className="back-arrow" to={`/`}>
                    <FaChevronCircleLeft/>
                    <span className="icon-text">Main List</span>
                </Link>
        <div>
            <h1>PAGE NOT FOUND</h1>
        </div>
    </>
    )
}


