import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom"
// import MovieThumb from './components/MovieThumb'

const MovieDetails = () => {
    const {id}= useParams();

    return (
    <section className="movie-details"> {id} 
    </section>
    )
}

export default MovieDetails