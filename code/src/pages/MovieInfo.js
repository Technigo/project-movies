import React, {useEffect, useState } from 'react'
import "./movieInfo.css"
import { useParams } from 'react-router-dom'

export const MovieInfo = () => {
    const { movieId } = useParams()
    const [ movie, setMovie ] = useState ([])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=3812b9925d12c2723ac148f3607b8bb5&language=en-US`)
        .then((res) => res.json())
        .then((json) => {
            setMovie(json)
            console.log(json)
        })
    }, [movieId])

    return(
        <section className="infoContainer">
            {/*background picture for the site*/}
            <img className="backDrop" src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} alt={movie.original_title} />
             {/*contains poster, text about movie, title and rating*/}
            <div className="aboutContainer">
                <div className="infoPoster">             
                    <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.original_title} />
                </div> 
                <div className="titleInfo">   
                         {/*contains title and rating*/} 
                        <h1 className="movieTitle">{movie.original_title}
                            <p className="movieVotes">{movie.vote_average}/10</p>
                        </h1>
                        <p>{movie.overview}</p>
                </div>  
            </div>
        </section> 
    )
}