import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const apiKey = "ab2733ae6909a12384fc457b822942ca"


 export const DetailsMovies = () => {
    const [ movie, setMovie ] = useState()
    const { id } = useParams()

    useEffect(() => {

        fetch(`[https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US](https://api.themoviedb.org/3/movie/%7Bmovie_id%7D?api_key=%7Bapi_key%7D&language=en-US)`)
        .then((res) => res.json())
        .then((json) => {
            setMovie(json.results)
        })
        .catch(error => {
            console.log(error);
          });
    }, [id])


    return (

        <article className="MovieDetails">

        {movie && (
            <div className="background">
            <img src={`https://image.tmdb.org/t/p/w342${movie.backdrop_path}`} alt={movie.original_title} />
            <div className="MoviesDetails">
            <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.original_title} />
            <div className="MoviesDetailsText">
            <h1>{movie.title}<span className="raiting">{movie.vote_average}</span></h1>
            <p>{movie.overview}</p>

            </div>
            </div>
            </div>
        )}

        </article>

    

    )


 }