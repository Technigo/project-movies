import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'


export const Moviedetails = () => {
    const { movieId } = useParams()
    const [movie, setMovie] = useState([])
    const [error, setError] = useState()
    const [loading, setLoading] = useState (false)
    console.log("moviedetails")

    useEffect(() =>{
        console.log("useEffect")
        setLoading(true)
        fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=9c9b2fee306d943c3bd7e47689474308&language=en-US`)
        .then((res) => res.json())
        .then((json) =>{
            console.log(json)
            if (json.status_code === '34') {
                setError('Movie not found')
            } else {
                setMovie(json)
            }
           setLoading(false)
        })

    }, [movieId])

    if (loading){
        return <h1>LOADING</h1>
    }

    if (error){
        return <h1>{error}</h1>
    }

    return(
        <div className="detailPage" style={{backgroundImage: 
            `linear-gradient(rgba(0, 0, 0, 0) 70%, rgb(0, 0, 0) 100%), url(https://image.tmdb.org/t/p/w1280/${movie.backdrop_path})` }}>
            
            {/* <div className="background-image">
                <img style={{background: "linear-gradient(rgba(0, 0, 0, 0) 70%, rgb(0, 0, 0) 100%);" }} src={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`}/>
            </div> */}
            <Link to={`/`}>
            <div className="backLink"> 
                <div className="arrow">  
                </div> 
                <p>Movies</p>
            </div>
            </Link>

            <div className="summaryBox">           
                <img src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}/>   
                <div className="summary">
                    <h1>{movie.title}<span className="rating">{movie.vote_average}/10</span></h1>   
                    <div>{movie.overview}</div>
                </div>
            </div> 
        </div>
    )
}