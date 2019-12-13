import React, {useEffect, useState } from 'react'
import "./movieInfo.css"
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

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

    if (!movie) {
        return <div>Ups, need a moment...</div>
    }

    return(
        <section className="infoContainer">
            



{/* Link and svg for "Go Back"-button */}
            <Link className="backLink" to={`/`}>
                <svg className="backLinkImg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                    <path d="M27 14.5C27 7.596441 21.4035594 2 14.5 2S2 7.596441 2 14.5 7.5964406 27 14.5 27 27 21.403559 27 14.5zm-19.3388348-.353553l7.4852814-7.485282c.1952622-.195262.5118446-.195262.7071068 0l2.1213203 2.121321c.1952622.195262.1952622.511844 0 .707106L12.9644661 14.5l5.0104076 5.010408c.1952622.195262.1952622.511844 0 .707106l-2.1213203 2.121321c-.1952622.195262-.5118446.195262-.7071068 0l-7.4852814-7.485282c-.19799-.19799-.197989-.509117 0-.707106z" fill="#fff" fillRule="evenodd"></path></svg>
                <p>Movies</p>
            </Link>
            {/*backDrop background picture with CSS style in react for the site*/}
            < div className="backDrop" style={{backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`}} alt={movie.original_title} />
             {/*infoBox contains poster, text about movie, title and rating*/}
           
            <div className="infoBox">    
                <img className="infoPoster" src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.original_title} /> 
                {/*titleInfo contains title and rating to make them flex in css*/} 
                <div className="titleInfo">   
                    <h1 className="movieTitle">{movie.original_title}
                        <p className="movieVotes">{movie.vote_average}/10</p>
                    </h1>
                    <p>{movie.overview}</p>
                 
                
                </div>  
            </div>
        </section> 
    )
}