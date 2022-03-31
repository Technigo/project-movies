import React from "react";
import { Link } from "react-router-dom";

export const PopularList = ({movies, imgSize, baseURL}) => {
    return (
        <div className='movie-list-container'>
            {movies.map((movie) => (
                <div 
                    key={movie.id}
                    className='movie'
                    role='link'
                >    
                    <Link to={`/movies/${movie.id}`}>
                        <img 
                            className='poster-img'
                            src={`${baseURL}${imgSize}${movie.poster_path}`} 
                            alt={movie.orginal_title}
                        />
                        <div className="overlay">
                            <div className="overlay-text">
                                <h2>{movie.original_title}</h2>
                                <p>{'Released: ' + new Date(movie.release_date).getFullYear()}</p>
                            </div>
                        </div>    
                    </Link>
                </div>
            ))}
        </div>
    )
}
