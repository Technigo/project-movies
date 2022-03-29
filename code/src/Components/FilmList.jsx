import React from "react";
import { Link } from "react-router-dom";

const FilmList = ({films}) => {

    return(
        <>
        {films.map((film) => {
        return(
        <Link to={`/movies/${film.id}`} key={film.id}>
        <div className="film-card">
            <div className="film-image-group">
                <img className="card-image" src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} alt={film.title} />
                <div className="film-image-overlay"></div>
                <div className="film-text-overlay">
                    <h2 className="film-title">{film.title}</h2>
                    <h3 className="release-date">Released {film.release_date}</h3>
                </div>
            </div>
        </div>
        </Link>
        )
        })}
        </>
    )

}

export default FilmList
