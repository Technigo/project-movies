import React, { useState, useEffect} from "react"
import { useParams, Link } from "react-router-dom"

//NEXT STEPS:
//Adding details:
// original_title, vote_average, poster_path, overview}


export const MovieDetail = () => {
    const { id } = useParams()
    const [movieDetail, setMovieDetail] = useState ()
    const MOVIE_DETAIL_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=2c2891737dd5ffa64a8858cdba25ddfe&language=en-US`

    useEffect(() => {
      fetch(MOVIE_DETAIL_URL)
      .then((res) => res.json())
      .then((json) => console.log(json))  
    }, [MOVIE_DETAIL_URL])


    return (
        <section className = "movie-detail">

            <h1>Cool it's linked!</h1>
        </section>
        
    )
}