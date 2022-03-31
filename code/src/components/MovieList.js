import  React from 'react'
import { Link } from 'react-router-dom'



export const MovieList = ({movies}) => {
    
   
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

