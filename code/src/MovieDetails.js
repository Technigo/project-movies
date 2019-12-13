import React, {useEffect, useState } from 'react'
import { Link, useParams} from 'react-router-dom'
import "movieDetails.css"
import { MoviePoster } from 'MoviePoster'

export const Moviedetails = () => {
    const [movie, setMovie] = useState()
    const [loading, setLoading] = useState(false)
    const {id} = useParams()

    useEffect(() => {
        setLoading(true)
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=e3377c24099e57b80f30c2dff1865fdf&language=en-US`)
        .then ((res) => res.json())
        .then ((json) => {
            console.log(json)
            // console.log({id})
            setMovie(json)
            setLoading(false)
        })
     }, [])

     if (loading) {
         return (
             <h1>LOADING.... </h1>
         )
     }
    
    return (
        <div>
        {movie&& 
            <div className="moviestyle" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w342/${movie.backdrop_path})`, 
            backgroundRepeat: "no-repeat", 
            backgroundSize: "cover",
            linearGradient: "(#eb01a5, #d13531)"}}>
                {/* <img className="icon" src={"./assets/noun_go back_607558.png"} alt="go back by Ismael Ruiz from the Noun Project"/> */}
                {/* <Link to={MoviePoster}>Go back</Link> */}
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`${movie.title} poster`} 
                    style={{height: "500px", 
                    width: "auto", 
                    border:"solid 5px white"}}/>
                <div className="info">
                    <h1>{movie.title}</h1>
                    <article>{movie.overview}</article>
                </div>
            </div>}
        </div>

    )
    
}