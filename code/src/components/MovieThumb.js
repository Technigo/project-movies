import React from "react"
import { Link } from "react-router-dom"


export const MovieThumb = ({ poster_path, original_title, release_date, id }) => {
    return (

        //I removed the div that was wrapping this code and set the className 
        // in the div of the key in the Movie List and that made the movie-thumb 
        //fill the whole container in 50% ipad and 25% desktop

        //I dont know why the -text decoration none - doesnt work in this Link but it does work
        //in the movieDetail Link

        <Link to={`/movies/${id}`} style={{ textDecoration: 'none' }}>
          <img className="thumb-img" src= {`https://image.tmdb.org/t/p/w300${poster_path}`} alt={original_title}/>
            <div className="movie-thumb-text"> 
              <h1>{original_title}</h1>
              <h2>{release_date}</h2>
            </div> 
        </Link>    
    )
} 