import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

const MovieDetail = () => {
    const { id } = useParams()
    const [movies, setMovies2] = useState([])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=2e6a7b75ad4d088fae1f52620044bef7&language=en-US`)
        .then((res) => res.json())
        .then((json) => setMovies2(json))
    },[])
 //backgroundImage: "url(" + Background + ")"
    console.log(movies)
    return (
        <div className='details-wrapper' 
        style={{
            backgroundImage: "url(https://image.tmdb.org/t/p/w1280" + movies.backdrop_path
            
            }}
            >
            <img src={`https://image.tmdb.org/t/p/w300${movies.poster_path}`} alt={movies.title} />
            <h1>{movies.original_title}</h1>
            <h3>{movies.overview}</h3>
            <h4>{movies.vote_average}</h4>
            <Link to={`/`}>       
                <button>BACK</button>
            </Link>
           
        </div>
    )
}

export default MovieDetail


/*

   {movies.map((movie) => (
                <div>
                    <h1>{movie.original_title}</h1>
                    <h3>{movie.overview}</h3>
                    <h3>{movie.vote_avarage}</h3>
                    <img src={movie.backdrop_path} alt={movie.title} />
                </div>

            )
            )}


*/