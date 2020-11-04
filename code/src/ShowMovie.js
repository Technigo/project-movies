import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Route, Link} from 'react-router-dom'



export const ShowMovie = () => {
    const { id } = useParams()
    const [details, getDetails] = useState({})

    useEffect(() => {

    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=eb281b7f8ece67c3b577de3061fe96e1&language=en-US`)
    .then((response) => {
        return response.json()
    })
    .then((text) => {
        getDetails(text)
        console.log(text)
    })
    .catch((error) => {
        console.error('Request failed', error)
    })

    }, [id])

    return  (
        <div style={{ backgroundImage: `URL(https://image.tmdb.org/t/p/w1280/${details.backdrop_path})` }} className="backdrop-container">
            
                <div className="button-container">
                    <Route path="/:id">
                        <Link to="/">
                            <img src="https://img.pngio.com/back-button-free-arrows-icons-back-button-png-512_512.png" alt="back button" className="back-button" />
                        </Link>
                    </Route>
                </div>
                <div className="movie-details">
                    <div>
                        <p>{details.original_title}</p>
                        <p>Rating: {details.vote_average} / 10</p>
                        <p>{details.tagline}</p>
                        <p>{details.overview}</p>
                    </div>
                </div>
        </div>

    )
    
}