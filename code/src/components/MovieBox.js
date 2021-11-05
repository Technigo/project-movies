import React from 'react';
import { Link } from "react-router-dom";



const MovieBox = (props) => {

    return (

        <Link to={`/details/${props.movie.id}`}>
            <div>
                <img src={`https://image.tmdb.org/t/p/w780${props.movie.poster_path}`} alt="posters of movies"></img>
                <div className="details">
                    <h1>{props.movie.title}</h1>
                    <p>Released {props.movie.release_date}</p>
                </div>
            </div>
        </Link>

    )
}

export default MovieBox;