import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

// import { DETAIL_API_URL } from '../reusable/urls'
//{/* {movieDetails.map((details) => (
//     <div key={details.id}>
//     <h1>{details.original_title}</h1>
// </div>
// ))} */}

export const MovieDetails = () => {
    const { movieId } = useParams()
    const [movieDetails, setMovieDetails] = useState([])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=50eb4adf4920d3714372a2ce134f64ac&language=en-US`)
            .then((res) => res.json())
            .then(json => {
                console.log(json)
                setMovieDetails([json])
            })
    }, [movieId])

    return (
        <div>
            <section>
            {movieDetails.map((details) => (
                <div key={details.id}>
                <h1>{details.original_title}</h1>
            </div>
            ))}
            </section>
        </div>
    )
}