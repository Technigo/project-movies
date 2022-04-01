import  React, { useEffect, useState }  from 'react'
import { Link } from 'react-router-dom'



export const MovieList = () => {
    
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState (false)
    useEffect (() => {
        setLoading(true)
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=49589a3567a395f78c10dc80e04eaf2d&language=en-US&page=1`)
            .then((res) => res.json())
            .then((json) => {
                setMovies(json.results)
            })
            .finally(() => setLoading(false))
  
    }, [])
   
    if (loading) {
        return <h1 className="load">Loading in progess...</h1>
    }
    return(
        
        <div className="list-card">
        {movies.map((movie)=>(
            <Link key={movie.id}
            to={`/Details/${movie.id}`}>
            <div className="list-container">
                <div className="list-info">
                <img className="list-img" src={`https://image.tmdb.org/t/p/w342${movie.poster_path}` } alt="Poster"/>
                
                <div className="list-text">
                <h1>{movie.title}</h1>
                <p>Released {movie.release_date}</p>
                </div>
               </div>
            </div>
            </Link>)         
        )}
     </div>
        
    )
}

