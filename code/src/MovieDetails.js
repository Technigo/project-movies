import React, {useEffect, useState } from 'react'
import { Link, useParams} from 'react-router-dom'
import "movieDetails.css"
import {BackIcon} from 'BackIcon'

export const Moviedetails = () => {
    const [movie, setMovie] = useState()
    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)
    const {id} = useParams()

    useEffect(() => {
        setLoading(true)
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=e3377c24099e57b80f30c2dff1865fdf&language=en-US`)
        .then ((res) => res.json())
        .then ((json) => {
            if(json.status_code === 34) {
                setError('Movie not found')
                setLoading()
            } else {
            setMovie(json)
            }
            setLoading(false)
        })
        .catch(() => console.log("404?"))
     }, [id])

     if (loading) {
         return (
             <h1>LOADING.... </h1>
         )
     }
     if (error) {
     return <h1>{error}</h1>
     }
    
    return (
        <div> 
        {movie&& 
            <div className="moviestyle" style={{ 
            // backgroundImage: `linear-gradient: (rgba(0, 0, 0, 0) 90%, rgb(0, 0, 255) 100%), url(https://image.tmdb.org/t/p/w342/${movie.backdrop_path})`,
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 70%, rgb(0, 0, 0) 100%), url(${`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`})`, 
            backgroundRepeat: "no-repeat", 
            backgroundSize: "cover"}}>
            
                <div className="navigation">
                    <Link to="/">
                    <BackIcon />
                    <h3>Go back</h3>
                    </Link>
                </div>
                <div className="theMovie">
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`${movie.title} poster`} 
                        style={{height: "500px", 
                        width: "auto", 
                        border:"solid 5px white"}}/>
                        
                    <div className="info">
                        <h1>{movie.title}</h1>
                        <article>{movie.overview}</article>
                    </div>
                </div>
                
                
            </div>}
        </div>

    )
    
}