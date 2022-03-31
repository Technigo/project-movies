import React, { useState, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'


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

<div className="background-image">
            <img src={`https://image.tmdb.org/t/p/w1280${details.backdrop_path}`} alt={details.title}/>
            </div> 
            <NavLink to='/'>
                Back
            </NavLink>
               
            <div className="movie-box">
            <img className="movie-image" src={`https://image.tmdb.org/t/p/w342${details.poster_path}`} alt={details.title}/>
            <div className="movie-summary">
            <h1 className="movie-title">{details.title}</h1>
            <p className="movie-rating">{details.vote_average} / 10</p>
            <p>{details.overview}</p>
           
            </div>
        </div>
        </div>
    )
}

export default Details