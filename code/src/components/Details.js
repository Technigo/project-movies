import React, { useState, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'

import { BackIcon } from './BackIcon'

const Details = () => {

    const [details, setDetails] = useState([])
    const { id } = useParams()

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${'2ef0cecd459c1c1851bbe1d699a604a0'}&language=en-US`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setDetails(data)
            })
        }, [id])

    return (
            <div className="details-body"> 
                <img className="movie-poster" src={`https://image.tmdb.org/t/p/w1280${details.backdrop_path}`} alt={details.title}/>
                
                <NavLink class="backLink" to='/'>
                   <BackIcon />
                </NavLink>
                
                <div className="movie-box">
                    <img className="movie-image" src={`https://image.tmdb.org/t/p/w342${details.poster_path}`} alt={details.title} tabindex="0"/>
                    <div className="movie-summary">
                        <h1 className="movie-title" tabindex="0">{details.title}<span className="movie-rating" tabindex="0"     >{details.vote_average} / 10</span></h1>
                        <p tabindex="0" >{details.overview}</p>
                    </div>
                </div>
            </div>
    )
}

export default Details