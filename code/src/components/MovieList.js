import  React from 'react'
import { Link, NavLink } from 'react-router-dom'



export const MovieList = ({movies}) => {
    
   
    return(
        
        <div>
        {movies.map((movie)=>(
            <Link key={movie.id}
            to={`/Details/${movie.id}`}>
            <div>
                <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}` } alt="Poster"/>
                <h2>{movie.original_title}</h2>
                <h3>{movie.release_date}</h3>

            </div>
            </Link>)
            
        )}
     </div>
        
    )
}

