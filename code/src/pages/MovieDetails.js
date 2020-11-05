import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const MovieDetails = () => {
    const { id } = useParams()
    const [details, setDetails] = useState([])

    useEffect(() => {
        const MOVIE_DETAIL_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=0677b30458d017f7d0769e3f86ddb54e&language=en-US`
        fetch(MOVIE_DETAIL_URL)
        .then((response) => response.json())
        .then((json) => setDetails(json))
    }, [id] ) 

    return (
        <article className='movie-details'>
        <div className='backdrop-image'  style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 70%, rgba(0,0,0,1) 100%), url(https://image.tmdb.org/t/p/w1280${details.backdrop_path})` }}>
            <div className='image-and-text'>
                <img className='small-image' src={`https://image.tmdb.org/t/p/w342${details.poster_path}`} alt={details.title}></img>
                    <div className='details'>
                        <h1>{details.title} <span className="rating">{details.vote_average}/10</span></h1>
                        <p className='movie-info'>{details.overview}</p>                
                    </div>
            </div>
        </div>
    </article>
)
}